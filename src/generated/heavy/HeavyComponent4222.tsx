'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4222<T> = T extends (infer U)[]
  ? DeepReadonlyArray4222<U>
  : T extends object
  ? DeepReadonlyObject4222<T>
  : T;

interface DeepReadonlyArray4222<T> extends ReadonlyArray<DeepReadonly4222<T>> {}

type DeepReadonlyObject4222<T> = {
  readonly [P in keyof T]: DeepReadonly4222<T[P]>;
};

type UnionToIntersection4222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4222<T> = UnionToIntersection4222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4222<T extends unknown[], V> = [...T, V];

type TuplifyUnion4222<T, L = LastOf4222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4222<TuplifyUnion4222<Exclude<T, L>>, L>;

type DeepPartial4222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4222<T[P]> }
  : T;

type Paths4222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4222<K, Paths4222<T[K], Prev4222[D]>> : never }[keyof T]
  : never;

type Prev4222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4222 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths4222 = Paths4222<NestedConfig4222>;

interface HeavyProps4222 {
  config: DeepPartial4222<NestedConfig4222>;
  path?: ConfigPaths4222;
}

const HeavyComponent4222 = memo(function HeavyComponent4222({ config }: HeavyProps4222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4222.displayName = 'HeavyComponent4222';
export default HeavyComponent4222;

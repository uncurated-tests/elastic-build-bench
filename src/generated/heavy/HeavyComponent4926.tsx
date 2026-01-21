'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4926<T> = T extends (infer U)[]
  ? DeepReadonlyArray4926<U>
  : T extends object
  ? DeepReadonlyObject4926<T>
  : T;

interface DeepReadonlyArray4926<T> extends ReadonlyArray<DeepReadonly4926<T>> {}

type DeepReadonlyObject4926<T> = {
  readonly [P in keyof T]: DeepReadonly4926<T[P]>;
};

type UnionToIntersection4926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4926<T> = UnionToIntersection4926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4926<T extends unknown[], V> = [...T, V];

type TuplifyUnion4926<T, L = LastOf4926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4926<TuplifyUnion4926<Exclude<T, L>>, L>;

type DeepPartial4926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4926<T[P]> }
  : T;

type Paths4926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4926<K, Paths4926<T[K], Prev4926[D]>> : never }[keyof T]
  : never;

type Prev4926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4926 {
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

type ConfigPaths4926 = Paths4926<NestedConfig4926>;

interface HeavyProps4926 {
  config: DeepPartial4926<NestedConfig4926>;
  path?: ConfigPaths4926;
}

const HeavyComponent4926 = memo(function HeavyComponent4926({ config }: HeavyProps4926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4926.displayName = 'HeavyComponent4926';
export default HeavyComponent4926;

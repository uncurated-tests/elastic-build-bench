'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4396<T> = T extends (infer U)[]
  ? DeepReadonlyArray4396<U>
  : T extends object
  ? DeepReadonlyObject4396<T>
  : T;

interface DeepReadonlyArray4396<T> extends ReadonlyArray<DeepReadonly4396<T>> {}

type DeepReadonlyObject4396<T> = {
  readonly [P in keyof T]: DeepReadonly4396<T[P]>;
};

type UnionToIntersection4396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4396<T> = UnionToIntersection4396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4396<T extends unknown[], V> = [...T, V];

type TuplifyUnion4396<T, L = LastOf4396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4396<TuplifyUnion4396<Exclude<T, L>>, L>;

type DeepPartial4396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4396<T[P]> }
  : T;

type Paths4396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4396<K, Paths4396<T[K], Prev4396[D]>> : never }[keyof T]
  : never;

type Prev4396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4396 {
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

type ConfigPaths4396 = Paths4396<NestedConfig4396>;

interface HeavyProps4396 {
  config: DeepPartial4396<NestedConfig4396>;
  path?: ConfigPaths4396;
}

const HeavyComponent4396 = memo(function HeavyComponent4396({ config }: HeavyProps4396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4396.displayName = 'HeavyComponent4396';
export default HeavyComponent4396;

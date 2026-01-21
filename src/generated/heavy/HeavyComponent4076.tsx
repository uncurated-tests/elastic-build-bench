'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4076<T> = T extends (infer U)[]
  ? DeepReadonlyArray4076<U>
  : T extends object
  ? DeepReadonlyObject4076<T>
  : T;

interface DeepReadonlyArray4076<T> extends ReadonlyArray<DeepReadonly4076<T>> {}

type DeepReadonlyObject4076<T> = {
  readonly [P in keyof T]: DeepReadonly4076<T[P]>;
};

type UnionToIntersection4076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4076<T> = UnionToIntersection4076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4076<T extends unknown[], V> = [...T, V];

type TuplifyUnion4076<T, L = LastOf4076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4076<TuplifyUnion4076<Exclude<T, L>>, L>;

type DeepPartial4076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4076<T[P]> }
  : T;

type Paths4076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4076<K, Paths4076<T[K], Prev4076[D]>> : never }[keyof T]
  : never;

type Prev4076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4076 {
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

type ConfigPaths4076 = Paths4076<NestedConfig4076>;

interface HeavyProps4076 {
  config: DeepPartial4076<NestedConfig4076>;
  path?: ConfigPaths4076;
}

const HeavyComponent4076 = memo(function HeavyComponent4076({ config }: HeavyProps4076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4076.displayName = 'HeavyComponent4076';
export default HeavyComponent4076;

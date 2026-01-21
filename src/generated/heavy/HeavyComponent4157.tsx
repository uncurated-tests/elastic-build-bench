'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4157<T> = T extends (infer U)[]
  ? DeepReadonlyArray4157<U>
  : T extends object
  ? DeepReadonlyObject4157<T>
  : T;

interface DeepReadonlyArray4157<T> extends ReadonlyArray<DeepReadonly4157<T>> {}

type DeepReadonlyObject4157<T> = {
  readonly [P in keyof T]: DeepReadonly4157<T[P]>;
};

type UnionToIntersection4157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4157<T> = UnionToIntersection4157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4157<T extends unknown[], V> = [...T, V];

type TuplifyUnion4157<T, L = LastOf4157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4157<TuplifyUnion4157<Exclude<T, L>>, L>;

type DeepPartial4157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4157<T[P]> }
  : T;

type Paths4157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4157<K, Paths4157<T[K], Prev4157[D]>> : never }[keyof T]
  : never;

type Prev4157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4157 {
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

type ConfigPaths4157 = Paths4157<NestedConfig4157>;

interface HeavyProps4157 {
  config: DeepPartial4157<NestedConfig4157>;
  path?: ConfigPaths4157;
}

const HeavyComponent4157 = memo(function HeavyComponent4157({ config }: HeavyProps4157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4157.displayName = 'HeavyComponent4157';
export default HeavyComponent4157;

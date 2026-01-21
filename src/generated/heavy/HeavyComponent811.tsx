'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly811<T> = T extends (infer U)[]
  ? DeepReadonlyArray811<U>
  : T extends object
  ? DeepReadonlyObject811<T>
  : T;

interface DeepReadonlyArray811<T> extends ReadonlyArray<DeepReadonly811<T>> {}

type DeepReadonlyObject811<T> = {
  readonly [P in keyof T]: DeepReadonly811<T[P]>;
};

type UnionToIntersection811<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf811<T> = UnionToIntersection811<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push811<T extends unknown[], V> = [...T, V];

type TuplifyUnion811<T, L = LastOf811<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push811<TuplifyUnion811<Exclude<T, L>>, L>;

type DeepPartial811<T> = T extends object
  ? { [P in keyof T]?: DeepPartial811<T[P]> }
  : T;

type Paths811<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join811<K, Paths811<T[K], Prev811[D]>> : never }[keyof T]
  : never;

type Prev811 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join811<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig811 {
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

type ConfigPaths811 = Paths811<NestedConfig811>;

interface HeavyProps811 {
  config: DeepPartial811<NestedConfig811>;
  path?: ConfigPaths811;
}

const HeavyComponent811 = memo(function HeavyComponent811({ config }: HeavyProps811) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 811) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-811 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H811: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent811.displayName = 'HeavyComponent811';
export default HeavyComponent811;

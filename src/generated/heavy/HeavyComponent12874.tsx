'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12874<T> = T extends (infer U)[]
  ? DeepReadonlyArray12874<U>
  : T extends object
  ? DeepReadonlyObject12874<T>
  : T;

interface DeepReadonlyArray12874<T> extends ReadonlyArray<DeepReadonly12874<T>> {}

type DeepReadonlyObject12874<T> = {
  readonly [P in keyof T]: DeepReadonly12874<T[P]>;
};

type UnionToIntersection12874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12874<T> = UnionToIntersection12874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12874<T extends unknown[], V> = [...T, V];

type TuplifyUnion12874<T, L = LastOf12874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12874<TuplifyUnion12874<Exclude<T, L>>, L>;

type DeepPartial12874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12874<T[P]> }
  : T;

type Paths12874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12874<K, Paths12874<T[K], Prev12874[D]>> : never }[keyof T]
  : never;

type Prev12874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12874 {
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

type ConfigPaths12874 = Paths12874<NestedConfig12874>;

interface HeavyProps12874 {
  config: DeepPartial12874<NestedConfig12874>;
  path?: ConfigPaths12874;
}

const HeavyComponent12874 = memo(function HeavyComponent12874({ config }: HeavyProps12874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12874.displayName = 'HeavyComponent12874';
export default HeavyComponent12874;

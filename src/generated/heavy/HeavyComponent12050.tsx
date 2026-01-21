'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12050<T> = T extends (infer U)[]
  ? DeepReadonlyArray12050<U>
  : T extends object
  ? DeepReadonlyObject12050<T>
  : T;

interface DeepReadonlyArray12050<T> extends ReadonlyArray<DeepReadonly12050<T>> {}

type DeepReadonlyObject12050<T> = {
  readonly [P in keyof T]: DeepReadonly12050<T[P]>;
};

type UnionToIntersection12050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12050<T> = UnionToIntersection12050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12050<T extends unknown[], V> = [...T, V];

type TuplifyUnion12050<T, L = LastOf12050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12050<TuplifyUnion12050<Exclude<T, L>>, L>;

type DeepPartial12050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12050<T[P]> }
  : T;

type Paths12050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12050<K, Paths12050<T[K], Prev12050[D]>> : never }[keyof T]
  : never;

type Prev12050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12050 {
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

type ConfigPaths12050 = Paths12050<NestedConfig12050>;

interface HeavyProps12050 {
  config: DeepPartial12050<NestedConfig12050>;
  path?: ConfigPaths12050;
}

const HeavyComponent12050 = memo(function HeavyComponent12050({ config }: HeavyProps12050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12050.displayName = 'HeavyComponent12050';
export default HeavyComponent12050;

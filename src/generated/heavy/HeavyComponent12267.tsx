'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12267<T> = T extends (infer U)[]
  ? DeepReadonlyArray12267<U>
  : T extends object
  ? DeepReadonlyObject12267<T>
  : T;

interface DeepReadonlyArray12267<T> extends ReadonlyArray<DeepReadonly12267<T>> {}

type DeepReadonlyObject12267<T> = {
  readonly [P in keyof T]: DeepReadonly12267<T[P]>;
};

type UnionToIntersection12267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12267<T> = UnionToIntersection12267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12267<T extends unknown[], V> = [...T, V];

type TuplifyUnion12267<T, L = LastOf12267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12267<TuplifyUnion12267<Exclude<T, L>>, L>;

type DeepPartial12267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12267<T[P]> }
  : T;

type Paths12267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12267<K, Paths12267<T[K], Prev12267[D]>> : never }[keyof T]
  : never;

type Prev12267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12267 {
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

type ConfigPaths12267 = Paths12267<NestedConfig12267>;

interface HeavyProps12267 {
  config: DeepPartial12267<NestedConfig12267>;
  path?: ConfigPaths12267;
}

const HeavyComponent12267 = memo(function HeavyComponent12267({ config }: HeavyProps12267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12267.displayName = 'HeavyComponent12267';
export default HeavyComponent12267;

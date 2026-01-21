'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12246<T> = T extends (infer U)[]
  ? DeepReadonlyArray12246<U>
  : T extends object
  ? DeepReadonlyObject12246<T>
  : T;

interface DeepReadonlyArray12246<T> extends ReadonlyArray<DeepReadonly12246<T>> {}

type DeepReadonlyObject12246<T> = {
  readonly [P in keyof T]: DeepReadonly12246<T[P]>;
};

type UnionToIntersection12246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12246<T> = UnionToIntersection12246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12246<T extends unknown[], V> = [...T, V];

type TuplifyUnion12246<T, L = LastOf12246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12246<TuplifyUnion12246<Exclude<T, L>>, L>;

type DeepPartial12246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12246<T[P]> }
  : T;

type Paths12246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12246<K, Paths12246<T[K], Prev12246[D]>> : never }[keyof T]
  : never;

type Prev12246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12246 {
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

type ConfigPaths12246 = Paths12246<NestedConfig12246>;

interface HeavyProps12246 {
  config: DeepPartial12246<NestedConfig12246>;
  path?: ConfigPaths12246;
}

const HeavyComponent12246 = memo(function HeavyComponent12246({ config }: HeavyProps12246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12246.displayName = 'HeavyComponent12246';
export default HeavyComponent12246;

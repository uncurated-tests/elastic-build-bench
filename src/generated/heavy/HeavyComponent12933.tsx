'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12933<T> = T extends (infer U)[]
  ? DeepReadonlyArray12933<U>
  : T extends object
  ? DeepReadonlyObject12933<T>
  : T;

interface DeepReadonlyArray12933<T> extends ReadonlyArray<DeepReadonly12933<T>> {}

type DeepReadonlyObject12933<T> = {
  readonly [P in keyof T]: DeepReadonly12933<T[P]>;
};

type UnionToIntersection12933<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12933<T> = UnionToIntersection12933<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12933<T extends unknown[], V> = [...T, V];

type TuplifyUnion12933<T, L = LastOf12933<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12933<TuplifyUnion12933<Exclude<T, L>>, L>;

type DeepPartial12933<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12933<T[P]> }
  : T;

type Paths12933<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12933<K, Paths12933<T[K], Prev12933[D]>> : never }[keyof T]
  : never;

type Prev12933 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12933<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12933 {
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

type ConfigPaths12933 = Paths12933<NestedConfig12933>;

interface HeavyProps12933 {
  config: DeepPartial12933<NestedConfig12933>;
  path?: ConfigPaths12933;
}

const HeavyComponent12933 = memo(function HeavyComponent12933({ config }: HeavyProps12933) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12933) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12933 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12933: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12933.displayName = 'HeavyComponent12933';
export default HeavyComponent12933;

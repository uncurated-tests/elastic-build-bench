'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12754<T> = T extends (infer U)[]
  ? DeepReadonlyArray12754<U>
  : T extends object
  ? DeepReadonlyObject12754<T>
  : T;

interface DeepReadonlyArray12754<T> extends ReadonlyArray<DeepReadonly12754<T>> {}

type DeepReadonlyObject12754<T> = {
  readonly [P in keyof T]: DeepReadonly12754<T[P]>;
};

type UnionToIntersection12754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12754<T> = UnionToIntersection12754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12754<T extends unknown[], V> = [...T, V];

type TuplifyUnion12754<T, L = LastOf12754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12754<TuplifyUnion12754<Exclude<T, L>>, L>;

type DeepPartial12754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12754<T[P]> }
  : T;

type Paths12754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12754<K, Paths12754<T[K], Prev12754[D]>> : never }[keyof T]
  : never;

type Prev12754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12754 {
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

type ConfigPaths12754 = Paths12754<NestedConfig12754>;

interface HeavyProps12754 {
  config: DeepPartial12754<NestedConfig12754>;
  path?: ConfigPaths12754;
}

const HeavyComponent12754 = memo(function HeavyComponent12754({ config }: HeavyProps12754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12754.displayName = 'HeavyComponent12754';
export default HeavyComponent12754;

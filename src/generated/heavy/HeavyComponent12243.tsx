'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12243<T> = T extends (infer U)[]
  ? DeepReadonlyArray12243<U>
  : T extends object
  ? DeepReadonlyObject12243<T>
  : T;

interface DeepReadonlyArray12243<T> extends ReadonlyArray<DeepReadonly12243<T>> {}

type DeepReadonlyObject12243<T> = {
  readonly [P in keyof T]: DeepReadonly12243<T[P]>;
};

type UnionToIntersection12243<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12243<T> = UnionToIntersection12243<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12243<T extends unknown[], V> = [...T, V];

type TuplifyUnion12243<T, L = LastOf12243<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12243<TuplifyUnion12243<Exclude<T, L>>, L>;

type DeepPartial12243<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12243<T[P]> }
  : T;

type Paths12243<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12243<K, Paths12243<T[K], Prev12243[D]>> : never }[keyof T]
  : never;

type Prev12243 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12243<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12243 {
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

type ConfigPaths12243 = Paths12243<NestedConfig12243>;

interface HeavyProps12243 {
  config: DeepPartial12243<NestedConfig12243>;
  path?: ConfigPaths12243;
}

const HeavyComponent12243 = memo(function HeavyComponent12243({ config }: HeavyProps12243) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12243) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12243 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12243: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12243.displayName = 'HeavyComponent12243';
export default HeavyComponent12243;

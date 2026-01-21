'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12505<T> = T extends (infer U)[]
  ? DeepReadonlyArray12505<U>
  : T extends object
  ? DeepReadonlyObject12505<T>
  : T;

interface DeepReadonlyArray12505<T> extends ReadonlyArray<DeepReadonly12505<T>> {}

type DeepReadonlyObject12505<T> = {
  readonly [P in keyof T]: DeepReadonly12505<T[P]>;
};

type UnionToIntersection12505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12505<T> = UnionToIntersection12505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12505<T extends unknown[], V> = [...T, V];

type TuplifyUnion12505<T, L = LastOf12505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12505<TuplifyUnion12505<Exclude<T, L>>, L>;

type DeepPartial12505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12505<T[P]> }
  : T;

type Paths12505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12505<K, Paths12505<T[K], Prev12505[D]>> : never }[keyof T]
  : never;

type Prev12505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12505 {
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

type ConfigPaths12505 = Paths12505<NestedConfig12505>;

interface HeavyProps12505 {
  config: DeepPartial12505<NestedConfig12505>;
  path?: ConfigPaths12505;
}

const HeavyComponent12505 = memo(function HeavyComponent12505({ config }: HeavyProps12505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12505.displayName = 'HeavyComponent12505';
export default HeavyComponent12505;

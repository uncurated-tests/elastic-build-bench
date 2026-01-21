'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12507<T> = T extends (infer U)[]
  ? DeepReadonlyArray12507<U>
  : T extends object
  ? DeepReadonlyObject12507<T>
  : T;

interface DeepReadonlyArray12507<T> extends ReadonlyArray<DeepReadonly12507<T>> {}

type DeepReadonlyObject12507<T> = {
  readonly [P in keyof T]: DeepReadonly12507<T[P]>;
};

type UnionToIntersection12507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12507<T> = UnionToIntersection12507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12507<T extends unknown[], V> = [...T, V];

type TuplifyUnion12507<T, L = LastOf12507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12507<TuplifyUnion12507<Exclude<T, L>>, L>;

type DeepPartial12507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12507<T[P]> }
  : T;

type Paths12507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12507<K, Paths12507<T[K], Prev12507[D]>> : never }[keyof T]
  : never;

type Prev12507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12507 {
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

type ConfigPaths12507 = Paths12507<NestedConfig12507>;

interface HeavyProps12507 {
  config: DeepPartial12507<NestedConfig12507>;
  path?: ConfigPaths12507;
}

const HeavyComponent12507 = memo(function HeavyComponent12507({ config }: HeavyProps12507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12507.displayName = 'HeavyComponent12507';
export default HeavyComponent12507;

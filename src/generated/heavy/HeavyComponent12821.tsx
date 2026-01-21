'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12821<T> = T extends (infer U)[]
  ? DeepReadonlyArray12821<U>
  : T extends object
  ? DeepReadonlyObject12821<T>
  : T;

interface DeepReadonlyArray12821<T> extends ReadonlyArray<DeepReadonly12821<T>> {}

type DeepReadonlyObject12821<T> = {
  readonly [P in keyof T]: DeepReadonly12821<T[P]>;
};

type UnionToIntersection12821<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12821<T> = UnionToIntersection12821<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12821<T extends unknown[], V> = [...T, V];

type TuplifyUnion12821<T, L = LastOf12821<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12821<TuplifyUnion12821<Exclude<T, L>>, L>;

type DeepPartial12821<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12821<T[P]> }
  : T;

type Paths12821<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12821<K, Paths12821<T[K], Prev12821[D]>> : never }[keyof T]
  : never;

type Prev12821 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12821<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12821 {
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

type ConfigPaths12821 = Paths12821<NestedConfig12821>;

interface HeavyProps12821 {
  config: DeepPartial12821<NestedConfig12821>;
  path?: ConfigPaths12821;
}

const HeavyComponent12821 = memo(function HeavyComponent12821({ config }: HeavyProps12821) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12821) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12821 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12821: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12821.displayName = 'HeavyComponent12821';
export default HeavyComponent12821;

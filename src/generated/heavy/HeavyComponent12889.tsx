'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12889<T> = T extends (infer U)[]
  ? DeepReadonlyArray12889<U>
  : T extends object
  ? DeepReadonlyObject12889<T>
  : T;

interface DeepReadonlyArray12889<T> extends ReadonlyArray<DeepReadonly12889<T>> {}

type DeepReadonlyObject12889<T> = {
  readonly [P in keyof T]: DeepReadonly12889<T[P]>;
};

type UnionToIntersection12889<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12889<T> = UnionToIntersection12889<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12889<T extends unknown[], V> = [...T, V];

type TuplifyUnion12889<T, L = LastOf12889<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12889<TuplifyUnion12889<Exclude<T, L>>, L>;

type DeepPartial12889<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12889<T[P]> }
  : T;

type Paths12889<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12889<K, Paths12889<T[K], Prev12889[D]>> : never }[keyof T]
  : never;

type Prev12889 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12889<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12889 {
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

type ConfigPaths12889 = Paths12889<NestedConfig12889>;

interface HeavyProps12889 {
  config: DeepPartial12889<NestedConfig12889>;
  path?: ConfigPaths12889;
}

const HeavyComponent12889 = memo(function HeavyComponent12889({ config }: HeavyProps12889) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12889) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12889 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12889: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12889.displayName = 'HeavyComponent12889';
export default HeavyComponent12889;

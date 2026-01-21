'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12736<T> = T extends (infer U)[]
  ? DeepReadonlyArray12736<U>
  : T extends object
  ? DeepReadonlyObject12736<T>
  : T;

interface DeepReadonlyArray12736<T> extends ReadonlyArray<DeepReadonly12736<T>> {}

type DeepReadonlyObject12736<T> = {
  readonly [P in keyof T]: DeepReadonly12736<T[P]>;
};

type UnionToIntersection12736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12736<T> = UnionToIntersection12736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12736<T extends unknown[], V> = [...T, V];

type TuplifyUnion12736<T, L = LastOf12736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12736<TuplifyUnion12736<Exclude<T, L>>, L>;

type DeepPartial12736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12736<T[P]> }
  : T;

type Paths12736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12736<K, Paths12736<T[K], Prev12736[D]>> : never }[keyof T]
  : never;

type Prev12736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12736 {
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

type ConfigPaths12736 = Paths12736<NestedConfig12736>;

interface HeavyProps12736 {
  config: DeepPartial12736<NestedConfig12736>;
  path?: ConfigPaths12736;
}

const HeavyComponent12736 = memo(function HeavyComponent12736({ config }: HeavyProps12736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12736.displayName = 'HeavyComponent12736';
export default HeavyComponent12736;

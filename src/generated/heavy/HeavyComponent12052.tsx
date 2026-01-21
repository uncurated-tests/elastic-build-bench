'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12052<T> = T extends (infer U)[]
  ? DeepReadonlyArray12052<U>
  : T extends object
  ? DeepReadonlyObject12052<T>
  : T;

interface DeepReadonlyArray12052<T> extends ReadonlyArray<DeepReadonly12052<T>> {}

type DeepReadonlyObject12052<T> = {
  readonly [P in keyof T]: DeepReadonly12052<T[P]>;
};

type UnionToIntersection12052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12052<T> = UnionToIntersection12052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12052<T extends unknown[], V> = [...T, V];

type TuplifyUnion12052<T, L = LastOf12052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12052<TuplifyUnion12052<Exclude<T, L>>, L>;

type DeepPartial12052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12052<T[P]> }
  : T;

type Paths12052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12052<K, Paths12052<T[K], Prev12052[D]>> : never }[keyof T]
  : never;

type Prev12052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12052 {
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

type ConfigPaths12052 = Paths12052<NestedConfig12052>;

interface HeavyProps12052 {
  config: DeepPartial12052<NestedConfig12052>;
  path?: ConfigPaths12052;
}

const HeavyComponent12052 = memo(function HeavyComponent12052({ config }: HeavyProps12052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12052.displayName = 'HeavyComponent12052';
export default HeavyComponent12052;

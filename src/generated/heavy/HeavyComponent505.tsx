'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly505<T> = T extends (infer U)[]
  ? DeepReadonlyArray505<U>
  : T extends object
  ? DeepReadonlyObject505<T>
  : T;

interface DeepReadonlyArray505<T> extends ReadonlyArray<DeepReadonly505<T>> {}

type DeepReadonlyObject505<T> = {
  readonly [P in keyof T]: DeepReadonly505<T[P]>;
};

type UnionToIntersection505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf505<T> = UnionToIntersection505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push505<T extends unknown[], V> = [...T, V];

type TuplifyUnion505<T, L = LastOf505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push505<TuplifyUnion505<Exclude<T, L>>, L>;

type DeepPartial505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial505<T[P]> }
  : T;

type Paths505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join505<K, Paths505<T[K], Prev505[D]>> : never }[keyof T]
  : never;

type Prev505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig505 {
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

type ConfigPaths505 = Paths505<NestedConfig505>;

interface HeavyProps505 {
  config: DeepPartial505<NestedConfig505>;
  path?: ConfigPaths505;
}

const HeavyComponent505 = memo(function HeavyComponent505({ config }: HeavyProps505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent505.displayName = 'HeavyComponent505';
export default HeavyComponent505;

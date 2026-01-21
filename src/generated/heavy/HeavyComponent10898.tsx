'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10898<T> = T extends (infer U)[]
  ? DeepReadonlyArray10898<U>
  : T extends object
  ? DeepReadonlyObject10898<T>
  : T;

interface DeepReadonlyArray10898<T> extends ReadonlyArray<DeepReadonly10898<T>> {}

type DeepReadonlyObject10898<T> = {
  readonly [P in keyof T]: DeepReadonly10898<T[P]>;
};

type UnionToIntersection10898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10898<T> = UnionToIntersection10898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10898<T extends unknown[], V> = [...T, V];

type TuplifyUnion10898<T, L = LastOf10898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10898<TuplifyUnion10898<Exclude<T, L>>, L>;

type DeepPartial10898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10898<T[P]> }
  : T;

type Paths10898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10898<K, Paths10898<T[K], Prev10898[D]>> : never }[keyof T]
  : never;

type Prev10898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10898 {
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

type ConfigPaths10898 = Paths10898<NestedConfig10898>;

interface HeavyProps10898 {
  config: DeepPartial10898<NestedConfig10898>;
  path?: ConfigPaths10898;
}

const HeavyComponent10898 = memo(function HeavyComponent10898({ config }: HeavyProps10898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10898.displayName = 'HeavyComponent10898';
export default HeavyComponent10898;

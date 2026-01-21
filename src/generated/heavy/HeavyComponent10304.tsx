'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10304<T> = T extends (infer U)[]
  ? DeepReadonlyArray10304<U>
  : T extends object
  ? DeepReadonlyObject10304<T>
  : T;

interface DeepReadonlyArray10304<T> extends ReadonlyArray<DeepReadonly10304<T>> {}

type DeepReadonlyObject10304<T> = {
  readonly [P in keyof T]: DeepReadonly10304<T[P]>;
};

type UnionToIntersection10304<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10304<T> = UnionToIntersection10304<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10304<T extends unknown[], V> = [...T, V];

type TuplifyUnion10304<T, L = LastOf10304<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10304<TuplifyUnion10304<Exclude<T, L>>, L>;

type DeepPartial10304<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10304<T[P]> }
  : T;

type Paths10304<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10304<K, Paths10304<T[K], Prev10304[D]>> : never }[keyof T]
  : never;

type Prev10304 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10304<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10304 {
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

type ConfigPaths10304 = Paths10304<NestedConfig10304>;

interface HeavyProps10304 {
  config: DeepPartial10304<NestedConfig10304>;
  path?: ConfigPaths10304;
}

const HeavyComponent10304 = memo(function HeavyComponent10304({ config }: HeavyProps10304) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10304) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10304 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10304: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10304.displayName = 'HeavyComponent10304';
export default HeavyComponent10304;

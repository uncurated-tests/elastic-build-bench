'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10886<T> = T extends (infer U)[]
  ? DeepReadonlyArray10886<U>
  : T extends object
  ? DeepReadonlyObject10886<T>
  : T;

interface DeepReadonlyArray10886<T> extends ReadonlyArray<DeepReadonly10886<T>> {}

type DeepReadonlyObject10886<T> = {
  readonly [P in keyof T]: DeepReadonly10886<T[P]>;
};

type UnionToIntersection10886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10886<T> = UnionToIntersection10886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10886<T extends unknown[], V> = [...T, V];

type TuplifyUnion10886<T, L = LastOf10886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10886<TuplifyUnion10886<Exclude<T, L>>, L>;

type DeepPartial10886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10886<T[P]> }
  : T;

type Paths10886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10886<K, Paths10886<T[K], Prev10886[D]>> : never }[keyof T]
  : never;

type Prev10886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10886 {
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

type ConfigPaths10886 = Paths10886<NestedConfig10886>;

interface HeavyProps10886 {
  config: DeepPartial10886<NestedConfig10886>;
  path?: ConfigPaths10886;
}

const HeavyComponent10886 = memo(function HeavyComponent10886({ config }: HeavyProps10886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10886.displayName = 'HeavyComponent10886';
export default HeavyComponent10886;

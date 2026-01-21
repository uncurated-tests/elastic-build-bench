'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10569<T> = T extends (infer U)[]
  ? DeepReadonlyArray10569<U>
  : T extends object
  ? DeepReadonlyObject10569<T>
  : T;

interface DeepReadonlyArray10569<T> extends ReadonlyArray<DeepReadonly10569<T>> {}

type DeepReadonlyObject10569<T> = {
  readonly [P in keyof T]: DeepReadonly10569<T[P]>;
};

type UnionToIntersection10569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10569<T> = UnionToIntersection10569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10569<T extends unknown[], V> = [...T, V];

type TuplifyUnion10569<T, L = LastOf10569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10569<TuplifyUnion10569<Exclude<T, L>>, L>;

type DeepPartial10569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10569<T[P]> }
  : T;

type Paths10569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10569<K, Paths10569<T[K], Prev10569[D]>> : never }[keyof T]
  : never;

type Prev10569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10569 {
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

type ConfigPaths10569 = Paths10569<NestedConfig10569>;

interface HeavyProps10569 {
  config: DeepPartial10569<NestedConfig10569>;
  path?: ConfigPaths10569;
}

const HeavyComponent10569 = memo(function HeavyComponent10569({ config }: HeavyProps10569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10569.displayName = 'HeavyComponent10569';
export default HeavyComponent10569;

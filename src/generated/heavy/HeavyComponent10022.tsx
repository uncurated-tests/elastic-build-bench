'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10022<T> = T extends (infer U)[]
  ? DeepReadonlyArray10022<U>
  : T extends object
  ? DeepReadonlyObject10022<T>
  : T;

interface DeepReadonlyArray10022<T> extends ReadonlyArray<DeepReadonly10022<T>> {}

type DeepReadonlyObject10022<T> = {
  readonly [P in keyof T]: DeepReadonly10022<T[P]>;
};

type UnionToIntersection10022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10022<T> = UnionToIntersection10022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10022<T extends unknown[], V> = [...T, V];

type TuplifyUnion10022<T, L = LastOf10022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10022<TuplifyUnion10022<Exclude<T, L>>, L>;

type DeepPartial10022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10022<T[P]> }
  : T;

type Paths10022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10022<K, Paths10022<T[K], Prev10022[D]>> : never }[keyof T]
  : never;

type Prev10022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10022 {
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

type ConfigPaths10022 = Paths10022<NestedConfig10022>;

interface HeavyProps10022 {
  config: DeepPartial10022<NestedConfig10022>;
  path?: ConfigPaths10022;
}

const HeavyComponent10022 = memo(function HeavyComponent10022({ config }: HeavyProps10022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10022.displayName = 'HeavyComponent10022';
export default HeavyComponent10022;

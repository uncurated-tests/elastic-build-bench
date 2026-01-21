'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10074<T> = T extends (infer U)[]
  ? DeepReadonlyArray10074<U>
  : T extends object
  ? DeepReadonlyObject10074<T>
  : T;

interface DeepReadonlyArray10074<T> extends ReadonlyArray<DeepReadonly10074<T>> {}

type DeepReadonlyObject10074<T> = {
  readonly [P in keyof T]: DeepReadonly10074<T[P]>;
};

type UnionToIntersection10074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10074<T> = UnionToIntersection10074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10074<T extends unknown[], V> = [...T, V];

type TuplifyUnion10074<T, L = LastOf10074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10074<TuplifyUnion10074<Exclude<T, L>>, L>;

type DeepPartial10074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10074<T[P]> }
  : T;

type Paths10074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10074<K, Paths10074<T[K], Prev10074[D]>> : never }[keyof T]
  : never;

type Prev10074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10074 {
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

type ConfigPaths10074 = Paths10074<NestedConfig10074>;

interface HeavyProps10074 {
  config: DeepPartial10074<NestedConfig10074>;
  path?: ConfigPaths10074;
}

const HeavyComponent10074 = memo(function HeavyComponent10074({ config }: HeavyProps10074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10074.displayName = 'HeavyComponent10074';
export default HeavyComponent10074;

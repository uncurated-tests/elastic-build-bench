'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10462<T> = T extends (infer U)[]
  ? DeepReadonlyArray10462<U>
  : T extends object
  ? DeepReadonlyObject10462<T>
  : T;

interface DeepReadonlyArray10462<T> extends ReadonlyArray<DeepReadonly10462<T>> {}

type DeepReadonlyObject10462<T> = {
  readonly [P in keyof T]: DeepReadonly10462<T[P]>;
};

type UnionToIntersection10462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10462<T> = UnionToIntersection10462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10462<T extends unknown[], V> = [...T, V];

type TuplifyUnion10462<T, L = LastOf10462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10462<TuplifyUnion10462<Exclude<T, L>>, L>;

type DeepPartial10462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10462<T[P]> }
  : T;

type Paths10462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10462<K, Paths10462<T[K], Prev10462[D]>> : never }[keyof T]
  : never;

type Prev10462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10462 {
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

type ConfigPaths10462 = Paths10462<NestedConfig10462>;

interface HeavyProps10462 {
  config: DeepPartial10462<NestedConfig10462>;
  path?: ConfigPaths10462;
}

const HeavyComponent10462 = memo(function HeavyComponent10462({ config }: HeavyProps10462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10462.displayName = 'HeavyComponent10462';
export default HeavyComponent10462;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10562<T> = T extends (infer U)[]
  ? DeepReadonlyArray10562<U>
  : T extends object
  ? DeepReadonlyObject10562<T>
  : T;

interface DeepReadonlyArray10562<T> extends ReadonlyArray<DeepReadonly10562<T>> {}

type DeepReadonlyObject10562<T> = {
  readonly [P in keyof T]: DeepReadonly10562<T[P]>;
};

type UnionToIntersection10562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10562<T> = UnionToIntersection10562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10562<T extends unknown[], V> = [...T, V];

type TuplifyUnion10562<T, L = LastOf10562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10562<TuplifyUnion10562<Exclude<T, L>>, L>;

type DeepPartial10562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10562<T[P]> }
  : T;

type Paths10562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10562<K, Paths10562<T[K], Prev10562[D]>> : never }[keyof T]
  : never;

type Prev10562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10562 {
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

type ConfigPaths10562 = Paths10562<NestedConfig10562>;

interface HeavyProps10562 {
  config: DeepPartial10562<NestedConfig10562>;
  path?: ConfigPaths10562;
}

const HeavyComponent10562 = memo(function HeavyComponent10562({ config }: HeavyProps10562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10562.displayName = 'HeavyComponent10562';
export default HeavyComponent10562;

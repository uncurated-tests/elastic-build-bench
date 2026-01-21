'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10376<T> = T extends (infer U)[]
  ? DeepReadonlyArray10376<U>
  : T extends object
  ? DeepReadonlyObject10376<T>
  : T;

interface DeepReadonlyArray10376<T> extends ReadonlyArray<DeepReadonly10376<T>> {}

type DeepReadonlyObject10376<T> = {
  readonly [P in keyof T]: DeepReadonly10376<T[P]>;
};

type UnionToIntersection10376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10376<T> = UnionToIntersection10376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10376<T extends unknown[], V> = [...T, V];

type TuplifyUnion10376<T, L = LastOf10376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10376<TuplifyUnion10376<Exclude<T, L>>, L>;

type DeepPartial10376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10376<T[P]> }
  : T;

type Paths10376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10376<K, Paths10376<T[K], Prev10376[D]>> : never }[keyof T]
  : never;

type Prev10376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10376 {
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

type ConfigPaths10376 = Paths10376<NestedConfig10376>;

interface HeavyProps10376 {
  config: DeepPartial10376<NestedConfig10376>;
  path?: ConfigPaths10376;
}

const HeavyComponent10376 = memo(function HeavyComponent10376({ config }: HeavyProps10376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10376.displayName = 'HeavyComponent10376';
export default HeavyComponent10376;

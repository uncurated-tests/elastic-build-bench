'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10310<T> = T extends (infer U)[]
  ? DeepReadonlyArray10310<U>
  : T extends object
  ? DeepReadonlyObject10310<T>
  : T;

interface DeepReadonlyArray10310<T> extends ReadonlyArray<DeepReadonly10310<T>> {}

type DeepReadonlyObject10310<T> = {
  readonly [P in keyof T]: DeepReadonly10310<T[P]>;
};

type UnionToIntersection10310<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10310<T> = UnionToIntersection10310<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10310<T extends unknown[], V> = [...T, V];

type TuplifyUnion10310<T, L = LastOf10310<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10310<TuplifyUnion10310<Exclude<T, L>>, L>;

type DeepPartial10310<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10310<T[P]> }
  : T;

type Paths10310<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10310<K, Paths10310<T[K], Prev10310[D]>> : never }[keyof T]
  : never;

type Prev10310 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10310<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10310 {
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

type ConfigPaths10310 = Paths10310<NestedConfig10310>;

interface HeavyProps10310 {
  config: DeepPartial10310<NestedConfig10310>;
  path?: ConfigPaths10310;
}

const HeavyComponent10310 = memo(function HeavyComponent10310({ config }: HeavyProps10310) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10310) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10310 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10310: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10310.displayName = 'HeavyComponent10310';
export default HeavyComponent10310;

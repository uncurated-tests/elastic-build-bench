'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10381<T> = T extends (infer U)[]
  ? DeepReadonlyArray10381<U>
  : T extends object
  ? DeepReadonlyObject10381<T>
  : T;

interface DeepReadonlyArray10381<T> extends ReadonlyArray<DeepReadonly10381<T>> {}

type DeepReadonlyObject10381<T> = {
  readonly [P in keyof T]: DeepReadonly10381<T[P]>;
};

type UnionToIntersection10381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10381<T> = UnionToIntersection10381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10381<T extends unknown[], V> = [...T, V];

type TuplifyUnion10381<T, L = LastOf10381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10381<TuplifyUnion10381<Exclude<T, L>>, L>;

type DeepPartial10381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10381<T[P]> }
  : T;

type Paths10381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10381<K, Paths10381<T[K], Prev10381[D]>> : never }[keyof T]
  : never;

type Prev10381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10381 {
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

type ConfigPaths10381 = Paths10381<NestedConfig10381>;

interface HeavyProps10381 {
  config: DeepPartial10381<NestedConfig10381>;
  path?: ConfigPaths10381;
}

const HeavyComponent10381 = memo(function HeavyComponent10381({ config }: HeavyProps10381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10381.displayName = 'HeavyComponent10381';
export default HeavyComponent10381;

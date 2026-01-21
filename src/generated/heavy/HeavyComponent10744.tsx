'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10744<T> = T extends (infer U)[]
  ? DeepReadonlyArray10744<U>
  : T extends object
  ? DeepReadonlyObject10744<T>
  : T;

interface DeepReadonlyArray10744<T> extends ReadonlyArray<DeepReadonly10744<T>> {}

type DeepReadonlyObject10744<T> = {
  readonly [P in keyof T]: DeepReadonly10744<T[P]>;
};

type UnionToIntersection10744<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10744<T> = UnionToIntersection10744<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10744<T extends unknown[], V> = [...T, V];

type TuplifyUnion10744<T, L = LastOf10744<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10744<TuplifyUnion10744<Exclude<T, L>>, L>;

type DeepPartial10744<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10744<T[P]> }
  : T;

type Paths10744<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10744<K, Paths10744<T[K], Prev10744[D]>> : never }[keyof T]
  : never;

type Prev10744 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10744<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10744 {
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

type ConfigPaths10744 = Paths10744<NestedConfig10744>;

interface HeavyProps10744 {
  config: DeepPartial10744<NestedConfig10744>;
  path?: ConfigPaths10744;
}

const HeavyComponent10744 = memo(function HeavyComponent10744({ config }: HeavyProps10744) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10744) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10744 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10744: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10744.displayName = 'HeavyComponent10744';
export default HeavyComponent10744;

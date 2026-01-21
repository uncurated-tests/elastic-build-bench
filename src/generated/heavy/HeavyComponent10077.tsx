'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10077<T> = T extends (infer U)[]
  ? DeepReadonlyArray10077<U>
  : T extends object
  ? DeepReadonlyObject10077<T>
  : T;

interface DeepReadonlyArray10077<T> extends ReadonlyArray<DeepReadonly10077<T>> {}

type DeepReadonlyObject10077<T> = {
  readonly [P in keyof T]: DeepReadonly10077<T[P]>;
};

type UnionToIntersection10077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10077<T> = UnionToIntersection10077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10077<T extends unknown[], V> = [...T, V];

type TuplifyUnion10077<T, L = LastOf10077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10077<TuplifyUnion10077<Exclude<T, L>>, L>;

type DeepPartial10077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10077<T[P]> }
  : T;

type Paths10077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10077<K, Paths10077<T[K], Prev10077[D]>> : never }[keyof T]
  : never;

type Prev10077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10077 {
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

type ConfigPaths10077 = Paths10077<NestedConfig10077>;

interface HeavyProps10077 {
  config: DeepPartial10077<NestedConfig10077>;
  path?: ConfigPaths10077;
}

const HeavyComponent10077 = memo(function HeavyComponent10077({ config }: HeavyProps10077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10077.displayName = 'HeavyComponent10077';
export default HeavyComponent10077;

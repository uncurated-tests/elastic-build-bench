'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10009<T> = T extends (infer U)[]
  ? DeepReadonlyArray10009<U>
  : T extends object
  ? DeepReadonlyObject10009<T>
  : T;

interface DeepReadonlyArray10009<T> extends ReadonlyArray<DeepReadonly10009<T>> {}

type DeepReadonlyObject10009<T> = {
  readonly [P in keyof T]: DeepReadonly10009<T[P]>;
};

type UnionToIntersection10009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10009<T> = UnionToIntersection10009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10009<T extends unknown[], V> = [...T, V];

type TuplifyUnion10009<T, L = LastOf10009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10009<TuplifyUnion10009<Exclude<T, L>>, L>;

type DeepPartial10009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10009<T[P]> }
  : T;

type Paths10009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10009<K, Paths10009<T[K], Prev10009[D]>> : never }[keyof T]
  : never;

type Prev10009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10009 {
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

type ConfigPaths10009 = Paths10009<NestedConfig10009>;

interface HeavyProps10009 {
  config: DeepPartial10009<NestedConfig10009>;
  path?: ConfigPaths10009;
}

const HeavyComponent10009 = memo(function HeavyComponent10009({ config }: HeavyProps10009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10009.displayName = 'HeavyComponent10009';
export default HeavyComponent10009;

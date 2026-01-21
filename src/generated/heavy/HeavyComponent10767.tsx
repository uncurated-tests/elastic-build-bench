'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10767<T> = T extends (infer U)[]
  ? DeepReadonlyArray10767<U>
  : T extends object
  ? DeepReadonlyObject10767<T>
  : T;

interface DeepReadonlyArray10767<T> extends ReadonlyArray<DeepReadonly10767<T>> {}

type DeepReadonlyObject10767<T> = {
  readonly [P in keyof T]: DeepReadonly10767<T[P]>;
};

type UnionToIntersection10767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10767<T> = UnionToIntersection10767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10767<T extends unknown[], V> = [...T, V];

type TuplifyUnion10767<T, L = LastOf10767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10767<TuplifyUnion10767<Exclude<T, L>>, L>;

type DeepPartial10767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10767<T[P]> }
  : T;

type Paths10767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10767<K, Paths10767<T[K], Prev10767[D]>> : never }[keyof T]
  : never;

type Prev10767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10767 {
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

type ConfigPaths10767 = Paths10767<NestedConfig10767>;

interface HeavyProps10767 {
  config: DeepPartial10767<NestedConfig10767>;
  path?: ConfigPaths10767;
}

const HeavyComponent10767 = memo(function HeavyComponent10767({ config }: HeavyProps10767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10767.displayName = 'HeavyComponent10767';
export default HeavyComponent10767;

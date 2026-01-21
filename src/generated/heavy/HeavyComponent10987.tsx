'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10987<T> = T extends (infer U)[]
  ? DeepReadonlyArray10987<U>
  : T extends object
  ? DeepReadonlyObject10987<T>
  : T;

interface DeepReadonlyArray10987<T> extends ReadonlyArray<DeepReadonly10987<T>> {}

type DeepReadonlyObject10987<T> = {
  readonly [P in keyof T]: DeepReadonly10987<T[P]>;
};

type UnionToIntersection10987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10987<T> = UnionToIntersection10987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10987<T extends unknown[], V> = [...T, V];

type TuplifyUnion10987<T, L = LastOf10987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10987<TuplifyUnion10987<Exclude<T, L>>, L>;

type DeepPartial10987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10987<T[P]> }
  : T;

type Paths10987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10987<K, Paths10987<T[K], Prev10987[D]>> : never }[keyof T]
  : never;

type Prev10987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10987 {
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

type ConfigPaths10987 = Paths10987<NestedConfig10987>;

interface HeavyProps10987 {
  config: DeepPartial10987<NestedConfig10987>;
  path?: ConfigPaths10987;
}

const HeavyComponent10987 = memo(function HeavyComponent10987({ config }: HeavyProps10987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10987.displayName = 'HeavyComponent10987';
export default HeavyComponent10987;

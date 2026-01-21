'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10516<T> = T extends (infer U)[]
  ? DeepReadonlyArray10516<U>
  : T extends object
  ? DeepReadonlyObject10516<T>
  : T;

interface DeepReadonlyArray10516<T> extends ReadonlyArray<DeepReadonly10516<T>> {}

type DeepReadonlyObject10516<T> = {
  readonly [P in keyof T]: DeepReadonly10516<T[P]>;
};

type UnionToIntersection10516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10516<T> = UnionToIntersection10516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10516<T extends unknown[], V> = [...T, V];

type TuplifyUnion10516<T, L = LastOf10516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10516<TuplifyUnion10516<Exclude<T, L>>, L>;

type DeepPartial10516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10516<T[P]> }
  : T;

type Paths10516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10516<K, Paths10516<T[K], Prev10516[D]>> : never }[keyof T]
  : never;

type Prev10516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10516 {
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

type ConfigPaths10516 = Paths10516<NestedConfig10516>;

interface HeavyProps10516 {
  config: DeepPartial10516<NestedConfig10516>;
  path?: ConfigPaths10516;
}

const HeavyComponent10516 = memo(function HeavyComponent10516({ config }: HeavyProps10516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10516.displayName = 'HeavyComponent10516';
export default HeavyComponent10516;

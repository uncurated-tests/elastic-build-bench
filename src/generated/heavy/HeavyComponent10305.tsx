'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10305<T> = T extends (infer U)[]
  ? DeepReadonlyArray10305<U>
  : T extends object
  ? DeepReadonlyObject10305<T>
  : T;

interface DeepReadonlyArray10305<T> extends ReadonlyArray<DeepReadonly10305<T>> {}

type DeepReadonlyObject10305<T> = {
  readonly [P in keyof T]: DeepReadonly10305<T[P]>;
};

type UnionToIntersection10305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10305<T> = UnionToIntersection10305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10305<T extends unknown[], V> = [...T, V];

type TuplifyUnion10305<T, L = LastOf10305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10305<TuplifyUnion10305<Exclude<T, L>>, L>;

type DeepPartial10305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10305<T[P]> }
  : T;

type Paths10305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10305<K, Paths10305<T[K], Prev10305[D]>> : never }[keyof T]
  : never;

type Prev10305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10305 {
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

type ConfigPaths10305 = Paths10305<NestedConfig10305>;

interface HeavyProps10305 {
  config: DeepPartial10305<NestedConfig10305>;
  path?: ConfigPaths10305;
}

const HeavyComponent10305 = memo(function HeavyComponent10305({ config }: HeavyProps10305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10305.displayName = 'HeavyComponent10305';
export default HeavyComponent10305;

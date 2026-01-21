'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10797<T> = T extends (infer U)[]
  ? DeepReadonlyArray10797<U>
  : T extends object
  ? DeepReadonlyObject10797<T>
  : T;

interface DeepReadonlyArray10797<T> extends ReadonlyArray<DeepReadonly10797<T>> {}

type DeepReadonlyObject10797<T> = {
  readonly [P in keyof T]: DeepReadonly10797<T[P]>;
};

type UnionToIntersection10797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10797<T> = UnionToIntersection10797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10797<T extends unknown[], V> = [...T, V];

type TuplifyUnion10797<T, L = LastOf10797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10797<TuplifyUnion10797<Exclude<T, L>>, L>;

type DeepPartial10797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10797<T[P]> }
  : T;

type Paths10797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10797<K, Paths10797<T[K], Prev10797[D]>> : never }[keyof T]
  : never;

type Prev10797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10797 {
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

type ConfigPaths10797 = Paths10797<NestedConfig10797>;

interface HeavyProps10797 {
  config: DeepPartial10797<NestedConfig10797>;
  path?: ConfigPaths10797;
}

const HeavyComponent10797 = memo(function HeavyComponent10797({ config }: HeavyProps10797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10797.displayName = 'HeavyComponent10797';
export default HeavyComponent10797;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10252<T> = T extends (infer U)[]
  ? DeepReadonlyArray10252<U>
  : T extends object
  ? DeepReadonlyObject10252<T>
  : T;

interface DeepReadonlyArray10252<T> extends ReadonlyArray<DeepReadonly10252<T>> {}

type DeepReadonlyObject10252<T> = {
  readonly [P in keyof T]: DeepReadonly10252<T[P]>;
};

type UnionToIntersection10252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10252<T> = UnionToIntersection10252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10252<T extends unknown[], V> = [...T, V];

type TuplifyUnion10252<T, L = LastOf10252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10252<TuplifyUnion10252<Exclude<T, L>>, L>;

type DeepPartial10252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10252<T[P]> }
  : T;

type Paths10252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10252<K, Paths10252<T[K], Prev10252[D]>> : never }[keyof T]
  : never;

type Prev10252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10252 {
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

type ConfigPaths10252 = Paths10252<NestedConfig10252>;

interface HeavyProps10252 {
  config: DeepPartial10252<NestedConfig10252>;
  path?: ConfigPaths10252;
}

const HeavyComponent10252 = memo(function HeavyComponent10252({ config }: HeavyProps10252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10252.displayName = 'HeavyComponent10252';
export default HeavyComponent10252;

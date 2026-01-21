'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10711<T> = T extends (infer U)[]
  ? DeepReadonlyArray10711<U>
  : T extends object
  ? DeepReadonlyObject10711<T>
  : T;

interface DeepReadonlyArray10711<T> extends ReadonlyArray<DeepReadonly10711<T>> {}

type DeepReadonlyObject10711<T> = {
  readonly [P in keyof T]: DeepReadonly10711<T[P]>;
};

type UnionToIntersection10711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10711<T> = UnionToIntersection10711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10711<T extends unknown[], V> = [...T, V];

type TuplifyUnion10711<T, L = LastOf10711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10711<TuplifyUnion10711<Exclude<T, L>>, L>;

type DeepPartial10711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10711<T[P]> }
  : T;

type Paths10711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10711<K, Paths10711<T[K], Prev10711[D]>> : never }[keyof T]
  : never;

type Prev10711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10711 {
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

type ConfigPaths10711 = Paths10711<NestedConfig10711>;

interface HeavyProps10711 {
  config: DeepPartial10711<NestedConfig10711>;
  path?: ConfigPaths10711;
}

const HeavyComponent10711 = memo(function HeavyComponent10711({ config }: HeavyProps10711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10711.displayName = 'HeavyComponent10711';
export default HeavyComponent10711;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10817<T> = T extends (infer U)[]
  ? DeepReadonlyArray10817<U>
  : T extends object
  ? DeepReadonlyObject10817<T>
  : T;

interface DeepReadonlyArray10817<T> extends ReadonlyArray<DeepReadonly10817<T>> {}

type DeepReadonlyObject10817<T> = {
  readonly [P in keyof T]: DeepReadonly10817<T[P]>;
};

type UnionToIntersection10817<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10817<T> = UnionToIntersection10817<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10817<T extends unknown[], V> = [...T, V];

type TuplifyUnion10817<T, L = LastOf10817<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10817<TuplifyUnion10817<Exclude<T, L>>, L>;

type DeepPartial10817<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10817<T[P]> }
  : T;

type Paths10817<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10817<K, Paths10817<T[K], Prev10817[D]>> : never }[keyof T]
  : never;

type Prev10817 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10817<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10817 {
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

type ConfigPaths10817 = Paths10817<NestedConfig10817>;

interface HeavyProps10817 {
  config: DeepPartial10817<NestedConfig10817>;
  path?: ConfigPaths10817;
}

const HeavyComponent10817 = memo(function HeavyComponent10817({ config }: HeavyProps10817) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10817) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10817 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10817: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10817.displayName = 'HeavyComponent10817';
export default HeavyComponent10817;

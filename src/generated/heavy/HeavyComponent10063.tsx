'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10063<T> = T extends (infer U)[]
  ? DeepReadonlyArray10063<U>
  : T extends object
  ? DeepReadonlyObject10063<T>
  : T;

interface DeepReadonlyArray10063<T> extends ReadonlyArray<DeepReadonly10063<T>> {}

type DeepReadonlyObject10063<T> = {
  readonly [P in keyof T]: DeepReadonly10063<T[P]>;
};

type UnionToIntersection10063<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10063<T> = UnionToIntersection10063<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10063<T extends unknown[], V> = [...T, V];

type TuplifyUnion10063<T, L = LastOf10063<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10063<TuplifyUnion10063<Exclude<T, L>>, L>;

type DeepPartial10063<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10063<T[P]> }
  : T;

type Paths10063<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10063<K, Paths10063<T[K], Prev10063[D]>> : never }[keyof T]
  : never;

type Prev10063 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10063<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10063 {
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

type ConfigPaths10063 = Paths10063<NestedConfig10063>;

interface HeavyProps10063 {
  config: DeepPartial10063<NestedConfig10063>;
  path?: ConfigPaths10063;
}

const HeavyComponent10063 = memo(function HeavyComponent10063({ config }: HeavyProps10063) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10063) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10063 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10063: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10063.displayName = 'HeavyComponent10063';
export default HeavyComponent10063;

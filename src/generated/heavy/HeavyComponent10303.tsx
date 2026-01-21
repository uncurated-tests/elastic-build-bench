'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10303<T> = T extends (infer U)[]
  ? DeepReadonlyArray10303<U>
  : T extends object
  ? DeepReadonlyObject10303<T>
  : T;

interface DeepReadonlyArray10303<T> extends ReadonlyArray<DeepReadonly10303<T>> {}

type DeepReadonlyObject10303<T> = {
  readonly [P in keyof T]: DeepReadonly10303<T[P]>;
};

type UnionToIntersection10303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10303<T> = UnionToIntersection10303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10303<T extends unknown[], V> = [...T, V];

type TuplifyUnion10303<T, L = LastOf10303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10303<TuplifyUnion10303<Exclude<T, L>>, L>;

type DeepPartial10303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10303<T[P]> }
  : T;

type Paths10303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10303<K, Paths10303<T[K], Prev10303[D]>> : never }[keyof T]
  : never;

type Prev10303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10303 {
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

type ConfigPaths10303 = Paths10303<NestedConfig10303>;

interface HeavyProps10303 {
  config: DeepPartial10303<NestedConfig10303>;
  path?: ConfigPaths10303;
}

const HeavyComponent10303 = memo(function HeavyComponent10303({ config }: HeavyProps10303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10303.displayName = 'HeavyComponent10303';
export default HeavyComponent10303;

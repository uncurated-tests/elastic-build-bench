'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10905<T> = T extends (infer U)[]
  ? DeepReadonlyArray10905<U>
  : T extends object
  ? DeepReadonlyObject10905<T>
  : T;

interface DeepReadonlyArray10905<T> extends ReadonlyArray<DeepReadonly10905<T>> {}

type DeepReadonlyObject10905<T> = {
  readonly [P in keyof T]: DeepReadonly10905<T[P]>;
};

type UnionToIntersection10905<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10905<T> = UnionToIntersection10905<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10905<T extends unknown[], V> = [...T, V];

type TuplifyUnion10905<T, L = LastOf10905<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10905<TuplifyUnion10905<Exclude<T, L>>, L>;

type DeepPartial10905<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10905<T[P]> }
  : T;

type Paths10905<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10905<K, Paths10905<T[K], Prev10905[D]>> : never }[keyof T]
  : never;

type Prev10905 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10905<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10905 {
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

type ConfigPaths10905 = Paths10905<NestedConfig10905>;

interface HeavyProps10905 {
  config: DeepPartial10905<NestedConfig10905>;
  path?: ConfigPaths10905;
}

const HeavyComponent10905 = memo(function HeavyComponent10905({ config }: HeavyProps10905) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10905) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10905 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10905: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10905.displayName = 'HeavyComponent10905';
export default HeavyComponent10905;

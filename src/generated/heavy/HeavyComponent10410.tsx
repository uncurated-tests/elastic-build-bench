'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10410<T> = T extends (infer U)[]
  ? DeepReadonlyArray10410<U>
  : T extends object
  ? DeepReadonlyObject10410<T>
  : T;

interface DeepReadonlyArray10410<T> extends ReadonlyArray<DeepReadonly10410<T>> {}

type DeepReadonlyObject10410<T> = {
  readonly [P in keyof T]: DeepReadonly10410<T[P]>;
};

type UnionToIntersection10410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10410<T> = UnionToIntersection10410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10410<T extends unknown[], V> = [...T, V];

type TuplifyUnion10410<T, L = LastOf10410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10410<TuplifyUnion10410<Exclude<T, L>>, L>;

type DeepPartial10410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10410<T[P]> }
  : T;

type Paths10410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10410<K, Paths10410<T[K], Prev10410[D]>> : never }[keyof T]
  : never;

type Prev10410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10410 {
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

type ConfigPaths10410 = Paths10410<NestedConfig10410>;

interface HeavyProps10410 {
  config: DeepPartial10410<NestedConfig10410>;
  path?: ConfigPaths10410;
}

const HeavyComponent10410 = memo(function HeavyComponent10410({ config }: HeavyProps10410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10410.displayName = 'HeavyComponent10410';
export default HeavyComponent10410;

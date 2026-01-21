'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10869<T> = T extends (infer U)[]
  ? DeepReadonlyArray10869<U>
  : T extends object
  ? DeepReadonlyObject10869<T>
  : T;

interface DeepReadonlyArray10869<T> extends ReadonlyArray<DeepReadonly10869<T>> {}

type DeepReadonlyObject10869<T> = {
  readonly [P in keyof T]: DeepReadonly10869<T[P]>;
};

type UnionToIntersection10869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10869<T> = UnionToIntersection10869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10869<T extends unknown[], V> = [...T, V];

type TuplifyUnion10869<T, L = LastOf10869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10869<TuplifyUnion10869<Exclude<T, L>>, L>;

type DeepPartial10869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10869<T[P]> }
  : T;

type Paths10869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10869<K, Paths10869<T[K], Prev10869[D]>> : never }[keyof T]
  : never;

type Prev10869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10869 {
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

type ConfigPaths10869 = Paths10869<NestedConfig10869>;

interface HeavyProps10869 {
  config: DeepPartial10869<NestedConfig10869>;
  path?: ConfigPaths10869;
}

const HeavyComponent10869 = memo(function HeavyComponent10869({ config }: HeavyProps10869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10869.displayName = 'HeavyComponent10869';
export default HeavyComponent10869;

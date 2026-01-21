'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10426<T> = T extends (infer U)[]
  ? DeepReadonlyArray10426<U>
  : T extends object
  ? DeepReadonlyObject10426<T>
  : T;

interface DeepReadonlyArray10426<T> extends ReadonlyArray<DeepReadonly10426<T>> {}

type DeepReadonlyObject10426<T> = {
  readonly [P in keyof T]: DeepReadonly10426<T[P]>;
};

type UnionToIntersection10426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10426<T> = UnionToIntersection10426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10426<T extends unknown[], V> = [...T, V];

type TuplifyUnion10426<T, L = LastOf10426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10426<TuplifyUnion10426<Exclude<T, L>>, L>;

type DeepPartial10426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10426<T[P]> }
  : T;

type Paths10426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10426<K, Paths10426<T[K], Prev10426[D]>> : never }[keyof T]
  : never;

type Prev10426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10426 {
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

type ConfigPaths10426 = Paths10426<NestedConfig10426>;

interface HeavyProps10426 {
  config: DeepPartial10426<NestedConfig10426>;
  path?: ConfigPaths10426;
}

const HeavyComponent10426 = memo(function HeavyComponent10426({ config }: HeavyProps10426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10426.displayName = 'HeavyComponent10426';
export default HeavyComponent10426;

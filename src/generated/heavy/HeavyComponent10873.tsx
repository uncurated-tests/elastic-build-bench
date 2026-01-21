'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10873<T> = T extends (infer U)[]
  ? DeepReadonlyArray10873<U>
  : T extends object
  ? DeepReadonlyObject10873<T>
  : T;

interface DeepReadonlyArray10873<T> extends ReadonlyArray<DeepReadonly10873<T>> {}

type DeepReadonlyObject10873<T> = {
  readonly [P in keyof T]: DeepReadonly10873<T[P]>;
};

type UnionToIntersection10873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10873<T> = UnionToIntersection10873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10873<T extends unknown[], V> = [...T, V];

type TuplifyUnion10873<T, L = LastOf10873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10873<TuplifyUnion10873<Exclude<T, L>>, L>;

type DeepPartial10873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10873<T[P]> }
  : T;

type Paths10873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10873<K, Paths10873<T[K], Prev10873[D]>> : never }[keyof T]
  : never;

type Prev10873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10873 {
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

type ConfigPaths10873 = Paths10873<NestedConfig10873>;

interface HeavyProps10873 {
  config: DeepPartial10873<NestedConfig10873>;
  path?: ConfigPaths10873;
}

const HeavyComponent10873 = memo(function HeavyComponent10873({ config }: HeavyProps10873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10873.displayName = 'HeavyComponent10873';
export default HeavyComponent10873;

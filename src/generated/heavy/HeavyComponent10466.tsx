'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10466<T> = T extends (infer U)[]
  ? DeepReadonlyArray10466<U>
  : T extends object
  ? DeepReadonlyObject10466<T>
  : T;

interface DeepReadonlyArray10466<T> extends ReadonlyArray<DeepReadonly10466<T>> {}

type DeepReadonlyObject10466<T> = {
  readonly [P in keyof T]: DeepReadonly10466<T[P]>;
};

type UnionToIntersection10466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10466<T> = UnionToIntersection10466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10466<T extends unknown[], V> = [...T, V];

type TuplifyUnion10466<T, L = LastOf10466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10466<TuplifyUnion10466<Exclude<T, L>>, L>;

type DeepPartial10466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10466<T[P]> }
  : T;

type Paths10466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10466<K, Paths10466<T[K], Prev10466[D]>> : never }[keyof T]
  : never;

type Prev10466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10466 {
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

type ConfigPaths10466 = Paths10466<NestedConfig10466>;

interface HeavyProps10466 {
  config: DeepPartial10466<NestedConfig10466>;
  path?: ConfigPaths10466;
}

const HeavyComponent10466 = memo(function HeavyComponent10466({ config }: HeavyProps10466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10466.displayName = 'HeavyComponent10466';
export default HeavyComponent10466;

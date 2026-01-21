'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10290<T> = T extends (infer U)[]
  ? DeepReadonlyArray10290<U>
  : T extends object
  ? DeepReadonlyObject10290<T>
  : T;

interface DeepReadonlyArray10290<T> extends ReadonlyArray<DeepReadonly10290<T>> {}

type DeepReadonlyObject10290<T> = {
  readonly [P in keyof T]: DeepReadonly10290<T[P]>;
};

type UnionToIntersection10290<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10290<T> = UnionToIntersection10290<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10290<T extends unknown[], V> = [...T, V];

type TuplifyUnion10290<T, L = LastOf10290<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10290<TuplifyUnion10290<Exclude<T, L>>, L>;

type DeepPartial10290<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10290<T[P]> }
  : T;

type Paths10290<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10290<K, Paths10290<T[K], Prev10290[D]>> : never }[keyof T]
  : never;

type Prev10290 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10290<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10290 {
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

type ConfigPaths10290 = Paths10290<NestedConfig10290>;

interface HeavyProps10290 {
  config: DeepPartial10290<NestedConfig10290>;
  path?: ConfigPaths10290;
}

const HeavyComponent10290 = memo(function HeavyComponent10290({ config }: HeavyProps10290) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10290) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10290 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10290: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10290.displayName = 'HeavyComponent10290';
export default HeavyComponent10290;

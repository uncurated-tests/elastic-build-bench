'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10044<T> = T extends (infer U)[]
  ? DeepReadonlyArray10044<U>
  : T extends object
  ? DeepReadonlyObject10044<T>
  : T;

interface DeepReadonlyArray10044<T> extends ReadonlyArray<DeepReadonly10044<T>> {}

type DeepReadonlyObject10044<T> = {
  readonly [P in keyof T]: DeepReadonly10044<T[P]>;
};

type UnionToIntersection10044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10044<T> = UnionToIntersection10044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10044<T extends unknown[], V> = [...T, V];

type TuplifyUnion10044<T, L = LastOf10044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10044<TuplifyUnion10044<Exclude<T, L>>, L>;

type DeepPartial10044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10044<T[P]> }
  : T;

type Paths10044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10044<K, Paths10044<T[K], Prev10044[D]>> : never }[keyof T]
  : never;

type Prev10044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10044 {
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

type ConfigPaths10044 = Paths10044<NestedConfig10044>;

interface HeavyProps10044 {
  config: DeepPartial10044<NestedConfig10044>;
  path?: ConfigPaths10044;
}

const HeavyComponent10044 = memo(function HeavyComponent10044({ config }: HeavyProps10044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10044.displayName = 'HeavyComponent10044';
export default HeavyComponent10044;

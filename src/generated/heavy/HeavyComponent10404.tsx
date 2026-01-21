'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10404<T> = T extends (infer U)[]
  ? DeepReadonlyArray10404<U>
  : T extends object
  ? DeepReadonlyObject10404<T>
  : T;

interface DeepReadonlyArray10404<T> extends ReadonlyArray<DeepReadonly10404<T>> {}

type DeepReadonlyObject10404<T> = {
  readonly [P in keyof T]: DeepReadonly10404<T[P]>;
};

type UnionToIntersection10404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10404<T> = UnionToIntersection10404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10404<T extends unknown[], V> = [...T, V];

type TuplifyUnion10404<T, L = LastOf10404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10404<TuplifyUnion10404<Exclude<T, L>>, L>;

type DeepPartial10404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10404<T[P]> }
  : T;

type Paths10404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10404<K, Paths10404<T[K], Prev10404[D]>> : never }[keyof T]
  : never;

type Prev10404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10404 {
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

type ConfigPaths10404 = Paths10404<NestedConfig10404>;

interface HeavyProps10404 {
  config: DeepPartial10404<NestedConfig10404>;
  path?: ConfigPaths10404;
}

const HeavyComponent10404 = memo(function HeavyComponent10404({ config }: HeavyProps10404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10404.displayName = 'HeavyComponent10404';
export default HeavyComponent10404;

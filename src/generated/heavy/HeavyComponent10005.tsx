'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10005<T> = T extends (infer U)[]
  ? DeepReadonlyArray10005<U>
  : T extends object
  ? DeepReadonlyObject10005<T>
  : T;

interface DeepReadonlyArray10005<T> extends ReadonlyArray<DeepReadonly10005<T>> {}

type DeepReadonlyObject10005<T> = {
  readonly [P in keyof T]: DeepReadonly10005<T[P]>;
};

type UnionToIntersection10005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10005<T> = UnionToIntersection10005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10005<T extends unknown[], V> = [...T, V];

type TuplifyUnion10005<T, L = LastOf10005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10005<TuplifyUnion10005<Exclude<T, L>>, L>;

type DeepPartial10005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10005<T[P]> }
  : T;

type Paths10005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10005<K, Paths10005<T[K], Prev10005[D]>> : never }[keyof T]
  : never;

type Prev10005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10005 {
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

type ConfigPaths10005 = Paths10005<NestedConfig10005>;

interface HeavyProps10005 {
  config: DeepPartial10005<NestedConfig10005>;
  path?: ConfigPaths10005;
}

const HeavyComponent10005 = memo(function HeavyComponent10005({ config }: HeavyProps10005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10005.displayName = 'HeavyComponent10005';
export default HeavyComponent10005;

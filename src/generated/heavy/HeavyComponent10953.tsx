'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10953<T> = T extends (infer U)[]
  ? DeepReadonlyArray10953<U>
  : T extends object
  ? DeepReadonlyObject10953<T>
  : T;

interface DeepReadonlyArray10953<T> extends ReadonlyArray<DeepReadonly10953<T>> {}

type DeepReadonlyObject10953<T> = {
  readonly [P in keyof T]: DeepReadonly10953<T[P]>;
};

type UnionToIntersection10953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10953<T> = UnionToIntersection10953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10953<T extends unknown[], V> = [...T, V];

type TuplifyUnion10953<T, L = LastOf10953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10953<TuplifyUnion10953<Exclude<T, L>>, L>;

type DeepPartial10953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10953<T[P]> }
  : T;

type Paths10953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10953<K, Paths10953<T[K], Prev10953[D]>> : never }[keyof T]
  : never;

type Prev10953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10953 {
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

type ConfigPaths10953 = Paths10953<NestedConfig10953>;

interface HeavyProps10953 {
  config: DeepPartial10953<NestedConfig10953>;
  path?: ConfigPaths10953;
}

const HeavyComponent10953 = memo(function HeavyComponent10953({ config }: HeavyProps10953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10953.displayName = 'HeavyComponent10953';
export default HeavyComponent10953;

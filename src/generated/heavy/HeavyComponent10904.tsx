'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10904<T> = T extends (infer U)[]
  ? DeepReadonlyArray10904<U>
  : T extends object
  ? DeepReadonlyObject10904<T>
  : T;

interface DeepReadonlyArray10904<T> extends ReadonlyArray<DeepReadonly10904<T>> {}

type DeepReadonlyObject10904<T> = {
  readonly [P in keyof T]: DeepReadonly10904<T[P]>;
};

type UnionToIntersection10904<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10904<T> = UnionToIntersection10904<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10904<T extends unknown[], V> = [...T, V];

type TuplifyUnion10904<T, L = LastOf10904<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10904<TuplifyUnion10904<Exclude<T, L>>, L>;

type DeepPartial10904<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10904<T[P]> }
  : T;

type Paths10904<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10904<K, Paths10904<T[K], Prev10904[D]>> : never }[keyof T]
  : never;

type Prev10904 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10904<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10904 {
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

type ConfigPaths10904 = Paths10904<NestedConfig10904>;

interface HeavyProps10904 {
  config: DeepPartial10904<NestedConfig10904>;
  path?: ConfigPaths10904;
}

const HeavyComponent10904 = memo(function HeavyComponent10904({ config }: HeavyProps10904) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10904) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10904 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10904: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10904.displayName = 'HeavyComponent10904';
export default HeavyComponent10904;

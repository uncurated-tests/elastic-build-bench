'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10436<T> = T extends (infer U)[]
  ? DeepReadonlyArray10436<U>
  : T extends object
  ? DeepReadonlyObject10436<T>
  : T;

interface DeepReadonlyArray10436<T> extends ReadonlyArray<DeepReadonly10436<T>> {}

type DeepReadonlyObject10436<T> = {
  readonly [P in keyof T]: DeepReadonly10436<T[P]>;
};

type UnionToIntersection10436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10436<T> = UnionToIntersection10436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10436<T extends unknown[], V> = [...T, V];

type TuplifyUnion10436<T, L = LastOf10436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10436<TuplifyUnion10436<Exclude<T, L>>, L>;

type DeepPartial10436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10436<T[P]> }
  : T;

type Paths10436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10436<K, Paths10436<T[K], Prev10436[D]>> : never }[keyof T]
  : never;

type Prev10436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10436 {
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

type ConfigPaths10436 = Paths10436<NestedConfig10436>;

interface HeavyProps10436 {
  config: DeepPartial10436<NestedConfig10436>;
  path?: ConfigPaths10436;
}

const HeavyComponent10436 = memo(function HeavyComponent10436({ config }: HeavyProps10436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10436.displayName = 'HeavyComponent10436';
export default HeavyComponent10436;

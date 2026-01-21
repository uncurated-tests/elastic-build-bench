'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10896<T> = T extends (infer U)[]
  ? DeepReadonlyArray10896<U>
  : T extends object
  ? DeepReadonlyObject10896<T>
  : T;

interface DeepReadonlyArray10896<T> extends ReadonlyArray<DeepReadonly10896<T>> {}

type DeepReadonlyObject10896<T> = {
  readonly [P in keyof T]: DeepReadonly10896<T[P]>;
};

type UnionToIntersection10896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10896<T> = UnionToIntersection10896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10896<T extends unknown[], V> = [...T, V];

type TuplifyUnion10896<T, L = LastOf10896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10896<TuplifyUnion10896<Exclude<T, L>>, L>;

type DeepPartial10896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10896<T[P]> }
  : T;

type Paths10896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10896<K, Paths10896<T[K], Prev10896[D]>> : never }[keyof T]
  : never;

type Prev10896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10896 {
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

type ConfigPaths10896 = Paths10896<NestedConfig10896>;

interface HeavyProps10896 {
  config: DeepPartial10896<NestedConfig10896>;
  path?: ConfigPaths10896;
}

const HeavyComponent10896 = memo(function HeavyComponent10896({ config }: HeavyProps10896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10896.displayName = 'HeavyComponent10896';
export default HeavyComponent10896;

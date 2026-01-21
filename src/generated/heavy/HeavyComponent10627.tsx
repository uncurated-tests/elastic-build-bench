'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10627<T> = T extends (infer U)[]
  ? DeepReadonlyArray10627<U>
  : T extends object
  ? DeepReadonlyObject10627<T>
  : T;

interface DeepReadonlyArray10627<T> extends ReadonlyArray<DeepReadonly10627<T>> {}

type DeepReadonlyObject10627<T> = {
  readonly [P in keyof T]: DeepReadonly10627<T[P]>;
};

type UnionToIntersection10627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10627<T> = UnionToIntersection10627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10627<T extends unknown[], V> = [...T, V];

type TuplifyUnion10627<T, L = LastOf10627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10627<TuplifyUnion10627<Exclude<T, L>>, L>;

type DeepPartial10627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10627<T[P]> }
  : T;

type Paths10627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10627<K, Paths10627<T[K], Prev10627[D]>> : never }[keyof T]
  : never;

type Prev10627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10627 {
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

type ConfigPaths10627 = Paths10627<NestedConfig10627>;

interface HeavyProps10627 {
  config: DeepPartial10627<NestedConfig10627>;
  path?: ConfigPaths10627;
}

const HeavyComponent10627 = memo(function HeavyComponent10627({ config }: HeavyProps10627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10627.displayName = 'HeavyComponent10627';
export default HeavyComponent10627;

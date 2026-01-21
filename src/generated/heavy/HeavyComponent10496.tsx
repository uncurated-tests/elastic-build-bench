'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10496<T> = T extends (infer U)[]
  ? DeepReadonlyArray10496<U>
  : T extends object
  ? DeepReadonlyObject10496<T>
  : T;

interface DeepReadonlyArray10496<T> extends ReadonlyArray<DeepReadonly10496<T>> {}

type DeepReadonlyObject10496<T> = {
  readonly [P in keyof T]: DeepReadonly10496<T[P]>;
};

type UnionToIntersection10496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10496<T> = UnionToIntersection10496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10496<T extends unknown[], V> = [...T, V];

type TuplifyUnion10496<T, L = LastOf10496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10496<TuplifyUnion10496<Exclude<T, L>>, L>;

type DeepPartial10496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10496<T[P]> }
  : T;

type Paths10496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10496<K, Paths10496<T[K], Prev10496[D]>> : never }[keyof T]
  : never;

type Prev10496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10496 {
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

type ConfigPaths10496 = Paths10496<NestedConfig10496>;

interface HeavyProps10496 {
  config: DeepPartial10496<NestedConfig10496>;
  path?: ConfigPaths10496;
}

const HeavyComponent10496 = memo(function HeavyComponent10496({ config }: HeavyProps10496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10496.displayName = 'HeavyComponent10496';
export default HeavyComponent10496;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10576<T> = T extends (infer U)[]
  ? DeepReadonlyArray10576<U>
  : T extends object
  ? DeepReadonlyObject10576<T>
  : T;

interface DeepReadonlyArray10576<T> extends ReadonlyArray<DeepReadonly10576<T>> {}

type DeepReadonlyObject10576<T> = {
  readonly [P in keyof T]: DeepReadonly10576<T[P]>;
};

type UnionToIntersection10576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10576<T> = UnionToIntersection10576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10576<T extends unknown[], V> = [...T, V];

type TuplifyUnion10576<T, L = LastOf10576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10576<TuplifyUnion10576<Exclude<T, L>>, L>;

type DeepPartial10576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10576<T[P]> }
  : T;

type Paths10576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10576<K, Paths10576<T[K], Prev10576[D]>> : never }[keyof T]
  : never;

type Prev10576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10576 {
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

type ConfigPaths10576 = Paths10576<NestedConfig10576>;

interface HeavyProps10576 {
  config: DeepPartial10576<NestedConfig10576>;
  path?: ConfigPaths10576;
}

const HeavyComponent10576 = memo(function HeavyComponent10576({ config }: HeavyProps10576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10576.displayName = 'HeavyComponent10576';
export default HeavyComponent10576;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10148<T> = T extends (infer U)[]
  ? DeepReadonlyArray10148<U>
  : T extends object
  ? DeepReadonlyObject10148<T>
  : T;

interface DeepReadonlyArray10148<T> extends ReadonlyArray<DeepReadonly10148<T>> {}

type DeepReadonlyObject10148<T> = {
  readonly [P in keyof T]: DeepReadonly10148<T[P]>;
};

type UnionToIntersection10148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10148<T> = UnionToIntersection10148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10148<T extends unknown[], V> = [...T, V];

type TuplifyUnion10148<T, L = LastOf10148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10148<TuplifyUnion10148<Exclude<T, L>>, L>;

type DeepPartial10148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10148<T[P]> }
  : T;

type Paths10148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10148<K, Paths10148<T[K], Prev10148[D]>> : never }[keyof T]
  : never;

type Prev10148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10148 {
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

type ConfigPaths10148 = Paths10148<NestedConfig10148>;

interface HeavyProps10148 {
  config: DeepPartial10148<NestedConfig10148>;
  path?: ConfigPaths10148;
}

const HeavyComponent10148 = memo(function HeavyComponent10148({ config }: HeavyProps10148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10148.displayName = 'HeavyComponent10148';
export default HeavyComponent10148;

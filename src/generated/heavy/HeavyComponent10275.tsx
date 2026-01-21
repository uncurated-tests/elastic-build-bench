'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10275<T> = T extends (infer U)[]
  ? DeepReadonlyArray10275<U>
  : T extends object
  ? DeepReadonlyObject10275<T>
  : T;

interface DeepReadonlyArray10275<T> extends ReadonlyArray<DeepReadonly10275<T>> {}

type DeepReadonlyObject10275<T> = {
  readonly [P in keyof T]: DeepReadonly10275<T[P]>;
};

type UnionToIntersection10275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10275<T> = UnionToIntersection10275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10275<T extends unknown[], V> = [...T, V];

type TuplifyUnion10275<T, L = LastOf10275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10275<TuplifyUnion10275<Exclude<T, L>>, L>;

type DeepPartial10275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10275<T[P]> }
  : T;

type Paths10275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10275<K, Paths10275<T[K], Prev10275[D]>> : never }[keyof T]
  : never;

type Prev10275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10275 {
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

type ConfigPaths10275 = Paths10275<NestedConfig10275>;

interface HeavyProps10275 {
  config: DeepPartial10275<NestedConfig10275>;
  path?: ConfigPaths10275;
}

const HeavyComponent10275 = memo(function HeavyComponent10275({ config }: HeavyProps10275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10275.displayName = 'HeavyComponent10275';
export default HeavyComponent10275;

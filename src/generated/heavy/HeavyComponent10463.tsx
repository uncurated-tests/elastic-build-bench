'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10463<T> = T extends (infer U)[]
  ? DeepReadonlyArray10463<U>
  : T extends object
  ? DeepReadonlyObject10463<T>
  : T;

interface DeepReadonlyArray10463<T> extends ReadonlyArray<DeepReadonly10463<T>> {}

type DeepReadonlyObject10463<T> = {
  readonly [P in keyof T]: DeepReadonly10463<T[P]>;
};

type UnionToIntersection10463<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10463<T> = UnionToIntersection10463<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10463<T extends unknown[], V> = [...T, V];

type TuplifyUnion10463<T, L = LastOf10463<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10463<TuplifyUnion10463<Exclude<T, L>>, L>;

type DeepPartial10463<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10463<T[P]> }
  : T;

type Paths10463<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10463<K, Paths10463<T[K], Prev10463[D]>> : never }[keyof T]
  : never;

type Prev10463 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10463<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10463 {
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

type ConfigPaths10463 = Paths10463<NestedConfig10463>;

interface HeavyProps10463 {
  config: DeepPartial10463<NestedConfig10463>;
  path?: ConfigPaths10463;
}

const HeavyComponent10463 = memo(function HeavyComponent10463({ config }: HeavyProps10463) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10463) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10463 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10463: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10463.displayName = 'HeavyComponent10463';
export default HeavyComponent10463;

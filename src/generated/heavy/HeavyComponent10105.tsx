'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10105<T> = T extends (infer U)[]
  ? DeepReadonlyArray10105<U>
  : T extends object
  ? DeepReadonlyObject10105<T>
  : T;

interface DeepReadonlyArray10105<T> extends ReadonlyArray<DeepReadonly10105<T>> {}

type DeepReadonlyObject10105<T> = {
  readonly [P in keyof T]: DeepReadonly10105<T[P]>;
};

type UnionToIntersection10105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10105<T> = UnionToIntersection10105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10105<T extends unknown[], V> = [...T, V];

type TuplifyUnion10105<T, L = LastOf10105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10105<TuplifyUnion10105<Exclude<T, L>>, L>;

type DeepPartial10105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10105<T[P]> }
  : T;

type Paths10105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10105<K, Paths10105<T[K], Prev10105[D]>> : never }[keyof T]
  : never;

type Prev10105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10105 {
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

type ConfigPaths10105 = Paths10105<NestedConfig10105>;

interface HeavyProps10105 {
  config: DeepPartial10105<NestedConfig10105>;
  path?: ConfigPaths10105;
}

const HeavyComponent10105 = memo(function HeavyComponent10105({ config }: HeavyProps10105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10105.displayName = 'HeavyComponent10105';
export default HeavyComponent10105;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10357<T> = T extends (infer U)[]
  ? DeepReadonlyArray10357<U>
  : T extends object
  ? DeepReadonlyObject10357<T>
  : T;

interface DeepReadonlyArray10357<T> extends ReadonlyArray<DeepReadonly10357<T>> {}

type DeepReadonlyObject10357<T> = {
  readonly [P in keyof T]: DeepReadonly10357<T[P]>;
};

type UnionToIntersection10357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10357<T> = UnionToIntersection10357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10357<T extends unknown[], V> = [...T, V];

type TuplifyUnion10357<T, L = LastOf10357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10357<TuplifyUnion10357<Exclude<T, L>>, L>;

type DeepPartial10357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10357<T[P]> }
  : T;

type Paths10357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10357<K, Paths10357<T[K], Prev10357[D]>> : never }[keyof T]
  : never;

type Prev10357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10357 {
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

type ConfigPaths10357 = Paths10357<NestedConfig10357>;

interface HeavyProps10357 {
  config: DeepPartial10357<NestedConfig10357>;
  path?: ConfigPaths10357;
}

const HeavyComponent10357 = memo(function HeavyComponent10357({ config }: HeavyProps10357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10357.displayName = 'HeavyComponent10357';
export default HeavyComponent10357;

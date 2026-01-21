'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10008<T> = T extends (infer U)[]
  ? DeepReadonlyArray10008<U>
  : T extends object
  ? DeepReadonlyObject10008<T>
  : T;

interface DeepReadonlyArray10008<T> extends ReadonlyArray<DeepReadonly10008<T>> {}

type DeepReadonlyObject10008<T> = {
  readonly [P in keyof T]: DeepReadonly10008<T[P]>;
};

type UnionToIntersection10008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10008<T> = UnionToIntersection10008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10008<T extends unknown[], V> = [...T, V];

type TuplifyUnion10008<T, L = LastOf10008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10008<TuplifyUnion10008<Exclude<T, L>>, L>;

type DeepPartial10008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10008<T[P]> }
  : T;

type Paths10008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10008<K, Paths10008<T[K], Prev10008[D]>> : never }[keyof T]
  : never;

type Prev10008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10008 {
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

type ConfigPaths10008 = Paths10008<NestedConfig10008>;

interface HeavyProps10008 {
  config: DeepPartial10008<NestedConfig10008>;
  path?: ConfigPaths10008;
}

const HeavyComponent10008 = memo(function HeavyComponent10008({ config }: HeavyProps10008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10008.displayName = 'HeavyComponent10008';
export default HeavyComponent10008;

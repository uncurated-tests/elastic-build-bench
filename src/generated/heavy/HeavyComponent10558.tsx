'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10558<T> = T extends (infer U)[]
  ? DeepReadonlyArray10558<U>
  : T extends object
  ? DeepReadonlyObject10558<T>
  : T;

interface DeepReadonlyArray10558<T> extends ReadonlyArray<DeepReadonly10558<T>> {}

type DeepReadonlyObject10558<T> = {
  readonly [P in keyof T]: DeepReadonly10558<T[P]>;
};

type UnionToIntersection10558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10558<T> = UnionToIntersection10558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10558<T extends unknown[], V> = [...T, V];

type TuplifyUnion10558<T, L = LastOf10558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10558<TuplifyUnion10558<Exclude<T, L>>, L>;

type DeepPartial10558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10558<T[P]> }
  : T;

type Paths10558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10558<K, Paths10558<T[K], Prev10558[D]>> : never }[keyof T]
  : never;

type Prev10558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10558 {
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

type ConfigPaths10558 = Paths10558<NestedConfig10558>;

interface HeavyProps10558 {
  config: DeepPartial10558<NestedConfig10558>;
  path?: ConfigPaths10558;
}

const HeavyComponent10558 = memo(function HeavyComponent10558({ config }: HeavyProps10558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10558.displayName = 'HeavyComponent10558';
export default HeavyComponent10558;

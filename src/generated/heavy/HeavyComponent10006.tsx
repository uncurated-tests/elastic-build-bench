'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10006<T> = T extends (infer U)[]
  ? DeepReadonlyArray10006<U>
  : T extends object
  ? DeepReadonlyObject10006<T>
  : T;

interface DeepReadonlyArray10006<T> extends ReadonlyArray<DeepReadonly10006<T>> {}

type DeepReadonlyObject10006<T> = {
  readonly [P in keyof T]: DeepReadonly10006<T[P]>;
};

type UnionToIntersection10006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10006<T> = UnionToIntersection10006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10006<T extends unknown[], V> = [...T, V];

type TuplifyUnion10006<T, L = LastOf10006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10006<TuplifyUnion10006<Exclude<T, L>>, L>;

type DeepPartial10006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10006<T[P]> }
  : T;

type Paths10006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10006<K, Paths10006<T[K], Prev10006[D]>> : never }[keyof T]
  : never;

type Prev10006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10006 {
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

type ConfigPaths10006 = Paths10006<NestedConfig10006>;

interface HeavyProps10006 {
  config: DeepPartial10006<NestedConfig10006>;
  path?: ConfigPaths10006;
}

const HeavyComponent10006 = memo(function HeavyComponent10006({ config }: HeavyProps10006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10006.displayName = 'HeavyComponent10006';
export default HeavyComponent10006;

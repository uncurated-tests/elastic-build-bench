'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10907<T> = T extends (infer U)[]
  ? DeepReadonlyArray10907<U>
  : T extends object
  ? DeepReadonlyObject10907<T>
  : T;

interface DeepReadonlyArray10907<T> extends ReadonlyArray<DeepReadonly10907<T>> {}

type DeepReadonlyObject10907<T> = {
  readonly [P in keyof T]: DeepReadonly10907<T[P]>;
};

type UnionToIntersection10907<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10907<T> = UnionToIntersection10907<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10907<T extends unknown[], V> = [...T, V];

type TuplifyUnion10907<T, L = LastOf10907<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10907<TuplifyUnion10907<Exclude<T, L>>, L>;

type DeepPartial10907<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10907<T[P]> }
  : T;

type Paths10907<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10907<K, Paths10907<T[K], Prev10907[D]>> : never }[keyof T]
  : never;

type Prev10907 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10907<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10907 {
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

type ConfigPaths10907 = Paths10907<NestedConfig10907>;

interface HeavyProps10907 {
  config: DeepPartial10907<NestedConfig10907>;
  path?: ConfigPaths10907;
}

const HeavyComponent10907 = memo(function HeavyComponent10907({ config }: HeavyProps10907) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10907) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10907 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10907: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10907.displayName = 'HeavyComponent10907';
export default HeavyComponent10907;

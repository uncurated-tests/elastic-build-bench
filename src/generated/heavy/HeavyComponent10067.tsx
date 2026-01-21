'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10067<T> = T extends (infer U)[]
  ? DeepReadonlyArray10067<U>
  : T extends object
  ? DeepReadonlyObject10067<T>
  : T;

interface DeepReadonlyArray10067<T> extends ReadonlyArray<DeepReadonly10067<T>> {}

type DeepReadonlyObject10067<T> = {
  readonly [P in keyof T]: DeepReadonly10067<T[P]>;
};

type UnionToIntersection10067<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10067<T> = UnionToIntersection10067<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10067<T extends unknown[], V> = [...T, V];

type TuplifyUnion10067<T, L = LastOf10067<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10067<TuplifyUnion10067<Exclude<T, L>>, L>;

type DeepPartial10067<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10067<T[P]> }
  : T;

type Paths10067<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10067<K, Paths10067<T[K], Prev10067[D]>> : never }[keyof T]
  : never;

type Prev10067 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10067<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10067 {
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

type ConfigPaths10067 = Paths10067<NestedConfig10067>;

interface HeavyProps10067 {
  config: DeepPartial10067<NestedConfig10067>;
  path?: ConfigPaths10067;
}

const HeavyComponent10067 = memo(function HeavyComponent10067({ config }: HeavyProps10067) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10067) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10067 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10067: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10067.displayName = 'HeavyComponent10067';
export default HeavyComponent10067;

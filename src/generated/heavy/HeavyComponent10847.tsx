'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10847<T> = T extends (infer U)[]
  ? DeepReadonlyArray10847<U>
  : T extends object
  ? DeepReadonlyObject10847<T>
  : T;

interface DeepReadonlyArray10847<T> extends ReadonlyArray<DeepReadonly10847<T>> {}

type DeepReadonlyObject10847<T> = {
  readonly [P in keyof T]: DeepReadonly10847<T[P]>;
};

type UnionToIntersection10847<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10847<T> = UnionToIntersection10847<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10847<T extends unknown[], V> = [...T, V];

type TuplifyUnion10847<T, L = LastOf10847<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10847<TuplifyUnion10847<Exclude<T, L>>, L>;

type DeepPartial10847<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10847<T[P]> }
  : T;

type Paths10847<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10847<K, Paths10847<T[K], Prev10847[D]>> : never }[keyof T]
  : never;

type Prev10847 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10847<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10847 {
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

type ConfigPaths10847 = Paths10847<NestedConfig10847>;

interface HeavyProps10847 {
  config: DeepPartial10847<NestedConfig10847>;
  path?: ConfigPaths10847;
}

const HeavyComponent10847 = memo(function HeavyComponent10847({ config }: HeavyProps10847) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10847) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10847 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10847: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10847.displayName = 'HeavyComponent10847';
export default HeavyComponent10847;

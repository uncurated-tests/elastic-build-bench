'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10237<T> = T extends (infer U)[]
  ? DeepReadonlyArray10237<U>
  : T extends object
  ? DeepReadonlyObject10237<T>
  : T;

interface DeepReadonlyArray10237<T> extends ReadonlyArray<DeepReadonly10237<T>> {}

type DeepReadonlyObject10237<T> = {
  readonly [P in keyof T]: DeepReadonly10237<T[P]>;
};

type UnionToIntersection10237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10237<T> = UnionToIntersection10237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10237<T extends unknown[], V> = [...T, V];

type TuplifyUnion10237<T, L = LastOf10237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10237<TuplifyUnion10237<Exclude<T, L>>, L>;

type DeepPartial10237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10237<T[P]> }
  : T;

type Paths10237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10237<K, Paths10237<T[K], Prev10237[D]>> : never }[keyof T]
  : never;

type Prev10237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10237 {
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

type ConfigPaths10237 = Paths10237<NestedConfig10237>;

interface HeavyProps10237 {
  config: DeepPartial10237<NestedConfig10237>;
  path?: ConfigPaths10237;
}

const HeavyComponent10237 = memo(function HeavyComponent10237({ config }: HeavyProps10237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10237.displayName = 'HeavyComponent10237';
export default HeavyComponent10237;

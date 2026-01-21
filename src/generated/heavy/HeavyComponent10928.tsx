'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10928<T> = T extends (infer U)[]
  ? DeepReadonlyArray10928<U>
  : T extends object
  ? DeepReadonlyObject10928<T>
  : T;

interface DeepReadonlyArray10928<T> extends ReadonlyArray<DeepReadonly10928<T>> {}

type DeepReadonlyObject10928<T> = {
  readonly [P in keyof T]: DeepReadonly10928<T[P]>;
};

type UnionToIntersection10928<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10928<T> = UnionToIntersection10928<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10928<T extends unknown[], V> = [...T, V];

type TuplifyUnion10928<T, L = LastOf10928<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10928<TuplifyUnion10928<Exclude<T, L>>, L>;

type DeepPartial10928<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10928<T[P]> }
  : T;

type Paths10928<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10928<K, Paths10928<T[K], Prev10928[D]>> : never }[keyof T]
  : never;

type Prev10928 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10928<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10928 {
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

type ConfigPaths10928 = Paths10928<NestedConfig10928>;

interface HeavyProps10928 {
  config: DeepPartial10928<NestedConfig10928>;
  path?: ConfigPaths10928;
}

const HeavyComponent10928 = memo(function HeavyComponent10928({ config }: HeavyProps10928) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10928) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10928 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10928: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10928.displayName = 'HeavyComponent10928';
export default HeavyComponent10928;

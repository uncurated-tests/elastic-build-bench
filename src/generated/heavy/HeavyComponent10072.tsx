'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10072<T> = T extends (infer U)[]
  ? DeepReadonlyArray10072<U>
  : T extends object
  ? DeepReadonlyObject10072<T>
  : T;

interface DeepReadonlyArray10072<T> extends ReadonlyArray<DeepReadonly10072<T>> {}

type DeepReadonlyObject10072<T> = {
  readonly [P in keyof T]: DeepReadonly10072<T[P]>;
};

type UnionToIntersection10072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10072<T> = UnionToIntersection10072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10072<T extends unknown[], V> = [...T, V];

type TuplifyUnion10072<T, L = LastOf10072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10072<TuplifyUnion10072<Exclude<T, L>>, L>;

type DeepPartial10072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10072<T[P]> }
  : T;

type Paths10072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10072<K, Paths10072<T[K], Prev10072[D]>> : never }[keyof T]
  : never;

type Prev10072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10072 {
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

type ConfigPaths10072 = Paths10072<NestedConfig10072>;

interface HeavyProps10072 {
  config: DeepPartial10072<NestedConfig10072>;
  path?: ConfigPaths10072;
}

const HeavyComponent10072 = memo(function HeavyComponent10072({ config }: HeavyProps10072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10072.displayName = 'HeavyComponent10072';
export default HeavyComponent10072;

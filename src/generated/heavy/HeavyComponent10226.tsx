'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10226<T> = T extends (infer U)[]
  ? DeepReadonlyArray10226<U>
  : T extends object
  ? DeepReadonlyObject10226<T>
  : T;

interface DeepReadonlyArray10226<T> extends ReadonlyArray<DeepReadonly10226<T>> {}

type DeepReadonlyObject10226<T> = {
  readonly [P in keyof T]: DeepReadonly10226<T[P]>;
};

type UnionToIntersection10226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10226<T> = UnionToIntersection10226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10226<T extends unknown[], V> = [...T, V];

type TuplifyUnion10226<T, L = LastOf10226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10226<TuplifyUnion10226<Exclude<T, L>>, L>;

type DeepPartial10226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10226<T[P]> }
  : T;

type Paths10226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10226<K, Paths10226<T[K], Prev10226[D]>> : never }[keyof T]
  : never;

type Prev10226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10226 {
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

type ConfigPaths10226 = Paths10226<NestedConfig10226>;

interface HeavyProps10226 {
  config: DeepPartial10226<NestedConfig10226>;
  path?: ConfigPaths10226;
}

const HeavyComponent10226 = memo(function HeavyComponent10226({ config }: HeavyProps10226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10226.displayName = 'HeavyComponent10226';
export default HeavyComponent10226;

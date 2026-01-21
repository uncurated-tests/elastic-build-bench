'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10504<T> = T extends (infer U)[]
  ? DeepReadonlyArray10504<U>
  : T extends object
  ? DeepReadonlyObject10504<T>
  : T;

interface DeepReadonlyArray10504<T> extends ReadonlyArray<DeepReadonly10504<T>> {}

type DeepReadonlyObject10504<T> = {
  readonly [P in keyof T]: DeepReadonly10504<T[P]>;
};

type UnionToIntersection10504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10504<T> = UnionToIntersection10504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10504<T extends unknown[], V> = [...T, V];

type TuplifyUnion10504<T, L = LastOf10504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10504<TuplifyUnion10504<Exclude<T, L>>, L>;

type DeepPartial10504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10504<T[P]> }
  : T;

type Paths10504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10504<K, Paths10504<T[K], Prev10504[D]>> : never }[keyof T]
  : never;

type Prev10504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10504 {
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

type ConfigPaths10504 = Paths10504<NestedConfig10504>;

interface HeavyProps10504 {
  config: DeepPartial10504<NestedConfig10504>;
  path?: ConfigPaths10504;
}

const HeavyComponent10504 = memo(function HeavyComponent10504({ config }: HeavyProps10504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10504.displayName = 'HeavyComponent10504';
export default HeavyComponent10504;

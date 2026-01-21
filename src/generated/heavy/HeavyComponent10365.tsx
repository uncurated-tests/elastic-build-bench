'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10365<T> = T extends (infer U)[]
  ? DeepReadonlyArray10365<U>
  : T extends object
  ? DeepReadonlyObject10365<T>
  : T;

interface DeepReadonlyArray10365<T> extends ReadonlyArray<DeepReadonly10365<T>> {}

type DeepReadonlyObject10365<T> = {
  readonly [P in keyof T]: DeepReadonly10365<T[P]>;
};

type UnionToIntersection10365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10365<T> = UnionToIntersection10365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10365<T extends unknown[], V> = [...T, V];

type TuplifyUnion10365<T, L = LastOf10365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10365<TuplifyUnion10365<Exclude<T, L>>, L>;

type DeepPartial10365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10365<T[P]> }
  : T;

type Paths10365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10365<K, Paths10365<T[K], Prev10365[D]>> : never }[keyof T]
  : never;

type Prev10365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10365 {
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

type ConfigPaths10365 = Paths10365<NestedConfig10365>;

interface HeavyProps10365 {
  config: DeepPartial10365<NestedConfig10365>;
  path?: ConfigPaths10365;
}

const HeavyComponent10365 = memo(function HeavyComponent10365({ config }: HeavyProps10365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10365.displayName = 'HeavyComponent10365';
export default HeavyComponent10365;

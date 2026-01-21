'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10003<T> = T extends (infer U)[]
  ? DeepReadonlyArray10003<U>
  : T extends object
  ? DeepReadonlyObject10003<T>
  : T;

interface DeepReadonlyArray10003<T> extends ReadonlyArray<DeepReadonly10003<T>> {}

type DeepReadonlyObject10003<T> = {
  readonly [P in keyof T]: DeepReadonly10003<T[P]>;
};

type UnionToIntersection10003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10003<T> = UnionToIntersection10003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10003<T extends unknown[], V> = [...T, V];

type TuplifyUnion10003<T, L = LastOf10003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10003<TuplifyUnion10003<Exclude<T, L>>, L>;

type DeepPartial10003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10003<T[P]> }
  : T;

type Paths10003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10003<K, Paths10003<T[K], Prev10003[D]>> : never }[keyof T]
  : never;

type Prev10003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10003 {
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

type ConfigPaths10003 = Paths10003<NestedConfig10003>;

interface HeavyProps10003 {
  config: DeepPartial10003<NestedConfig10003>;
  path?: ConfigPaths10003;
}

const HeavyComponent10003 = memo(function HeavyComponent10003({ config }: HeavyProps10003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10003.displayName = 'HeavyComponent10003';
export default HeavyComponent10003;

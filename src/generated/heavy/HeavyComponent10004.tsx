'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10004<T> = T extends (infer U)[]
  ? DeepReadonlyArray10004<U>
  : T extends object
  ? DeepReadonlyObject10004<T>
  : T;

interface DeepReadonlyArray10004<T> extends ReadonlyArray<DeepReadonly10004<T>> {}

type DeepReadonlyObject10004<T> = {
  readonly [P in keyof T]: DeepReadonly10004<T[P]>;
};

type UnionToIntersection10004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10004<T> = UnionToIntersection10004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10004<T extends unknown[], V> = [...T, V];

type TuplifyUnion10004<T, L = LastOf10004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10004<TuplifyUnion10004<Exclude<T, L>>, L>;

type DeepPartial10004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10004<T[P]> }
  : T;

type Paths10004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10004<K, Paths10004<T[K], Prev10004[D]>> : never }[keyof T]
  : never;

type Prev10004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10004 {
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

type ConfigPaths10004 = Paths10004<NestedConfig10004>;

interface HeavyProps10004 {
  config: DeepPartial10004<NestedConfig10004>;
  path?: ConfigPaths10004;
}

const HeavyComponent10004 = memo(function HeavyComponent10004({ config }: HeavyProps10004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10004.displayName = 'HeavyComponent10004';
export default HeavyComponent10004;

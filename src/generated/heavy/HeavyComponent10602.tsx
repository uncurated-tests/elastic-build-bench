'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10602<T> = T extends (infer U)[]
  ? DeepReadonlyArray10602<U>
  : T extends object
  ? DeepReadonlyObject10602<T>
  : T;

interface DeepReadonlyArray10602<T> extends ReadonlyArray<DeepReadonly10602<T>> {}

type DeepReadonlyObject10602<T> = {
  readonly [P in keyof T]: DeepReadonly10602<T[P]>;
};

type UnionToIntersection10602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10602<T> = UnionToIntersection10602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10602<T extends unknown[], V> = [...T, V];

type TuplifyUnion10602<T, L = LastOf10602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10602<TuplifyUnion10602<Exclude<T, L>>, L>;

type DeepPartial10602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10602<T[P]> }
  : T;

type Paths10602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10602<K, Paths10602<T[K], Prev10602[D]>> : never }[keyof T]
  : never;

type Prev10602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10602 {
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

type ConfigPaths10602 = Paths10602<NestedConfig10602>;

interface HeavyProps10602 {
  config: DeepPartial10602<NestedConfig10602>;
  path?: ConfigPaths10602;
}

const HeavyComponent10602 = memo(function HeavyComponent10602({ config }: HeavyProps10602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10602.displayName = 'HeavyComponent10602';
export default HeavyComponent10602;

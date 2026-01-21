'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10223<T> = T extends (infer U)[]
  ? DeepReadonlyArray10223<U>
  : T extends object
  ? DeepReadonlyObject10223<T>
  : T;

interface DeepReadonlyArray10223<T> extends ReadonlyArray<DeepReadonly10223<T>> {}

type DeepReadonlyObject10223<T> = {
  readonly [P in keyof T]: DeepReadonly10223<T[P]>;
};

type UnionToIntersection10223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10223<T> = UnionToIntersection10223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10223<T extends unknown[], V> = [...T, V];

type TuplifyUnion10223<T, L = LastOf10223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10223<TuplifyUnion10223<Exclude<T, L>>, L>;

type DeepPartial10223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10223<T[P]> }
  : T;

type Paths10223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10223<K, Paths10223<T[K], Prev10223[D]>> : never }[keyof T]
  : never;

type Prev10223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10223 {
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

type ConfigPaths10223 = Paths10223<NestedConfig10223>;

interface HeavyProps10223 {
  config: DeepPartial10223<NestedConfig10223>;
  path?: ConfigPaths10223;
}

const HeavyComponent10223 = memo(function HeavyComponent10223({ config }: HeavyProps10223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10223.displayName = 'HeavyComponent10223';
export default HeavyComponent10223;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10203<T> = T extends (infer U)[]
  ? DeepReadonlyArray10203<U>
  : T extends object
  ? DeepReadonlyObject10203<T>
  : T;

interface DeepReadonlyArray10203<T> extends ReadonlyArray<DeepReadonly10203<T>> {}

type DeepReadonlyObject10203<T> = {
  readonly [P in keyof T]: DeepReadonly10203<T[P]>;
};

type UnionToIntersection10203<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10203<T> = UnionToIntersection10203<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10203<T extends unknown[], V> = [...T, V];

type TuplifyUnion10203<T, L = LastOf10203<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10203<TuplifyUnion10203<Exclude<T, L>>, L>;

type DeepPartial10203<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10203<T[P]> }
  : T;

type Paths10203<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10203<K, Paths10203<T[K], Prev10203[D]>> : never }[keyof T]
  : never;

type Prev10203 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10203<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10203 {
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

type ConfigPaths10203 = Paths10203<NestedConfig10203>;

interface HeavyProps10203 {
  config: DeepPartial10203<NestedConfig10203>;
  path?: ConfigPaths10203;
}

const HeavyComponent10203 = memo(function HeavyComponent10203({ config }: HeavyProps10203) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10203) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10203 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10203: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10203.displayName = 'HeavyComponent10203';
export default HeavyComponent10203;

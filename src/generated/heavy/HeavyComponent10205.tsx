'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10205<T> = T extends (infer U)[]
  ? DeepReadonlyArray10205<U>
  : T extends object
  ? DeepReadonlyObject10205<T>
  : T;

interface DeepReadonlyArray10205<T> extends ReadonlyArray<DeepReadonly10205<T>> {}

type DeepReadonlyObject10205<T> = {
  readonly [P in keyof T]: DeepReadonly10205<T[P]>;
};

type UnionToIntersection10205<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10205<T> = UnionToIntersection10205<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10205<T extends unknown[], V> = [...T, V];

type TuplifyUnion10205<T, L = LastOf10205<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10205<TuplifyUnion10205<Exclude<T, L>>, L>;

type DeepPartial10205<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10205<T[P]> }
  : T;

type Paths10205<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10205<K, Paths10205<T[K], Prev10205[D]>> : never }[keyof T]
  : never;

type Prev10205 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10205<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10205 {
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

type ConfigPaths10205 = Paths10205<NestedConfig10205>;

interface HeavyProps10205 {
  config: DeepPartial10205<NestedConfig10205>;
  path?: ConfigPaths10205;
}

const HeavyComponent10205 = memo(function HeavyComponent10205({ config }: HeavyProps10205) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10205) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10205 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10205: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10205.displayName = 'HeavyComponent10205';
export default HeavyComponent10205;

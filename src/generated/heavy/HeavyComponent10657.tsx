'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10657<T> = T extends (infer U)[]
  ? DeepReadonlyArray10657<U>
  : T extends object
  ? DeepReadonlyObject10657<T>
  : T;

interface DeepReadonlyArray10657<T> extends ReadonlyArray<DeepReadonly10657<T>> {}

type DeepReadonlyObject10657<T> = {
  readonly [P in keyof T]: DeepReadonly10657<T[P]>;
};

type UnionToIntersection10657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10657<T> = UnionToIntersection10657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10657<T extends unknown[], V> = [...T, V];

type TuplifyUnion10657<T, L = LastOf10657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10657<TuplifyUnion10657<Exclude<T, L>>, L>;

type DeepPartial10657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10657<T[P]> }
  : T;

type Paths10657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10657<K, Paths10657<T[K], Prev10657[D]>> : never }[keyof T]
  : never;

type Prev10657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10657 {
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

type ConfigPaths10657 = Paths10657<NestedConfig10657>;

interface HeavyProps10657 {
  config: DeepPartial10657<NestedConfig10657>;
  path?: ConfigPaths10657;
}

const HeavyComponent10657 = memo(function HeavyComponent10657({ config }: HeavyProps10657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10657.displayName = 'HeavyComponent10657';
export default HeavyComponent10657;

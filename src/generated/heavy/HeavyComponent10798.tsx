'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10798<T> = T extends (infer U)[]
  ? DeepReadonlyArray10798<U>
  : T extends object
  ? DeepReadonlyObject10798<T>
  : T;

interface DeepReadonlyArray10798<T> extends ReadonlyArray<DeepReadonly10798<T>> {}

type DeepReadonlyObject10798<T> = {
  readonly [P in keyof T]: DeepReadonly10798<T[P]>;
};

type UnionToIntersection10798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10798<T> = UnionToIntersection10798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10798<T extends unknown[], V> = [...T, V];

type TuplifyUnion10798<T, L = LastOf10798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10798<TuplifyUnion10798<Exclude<T, L>>, L>;

type DeepPartial10798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10798<T[P]> }
  : T;

type Paths10798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10798<K, Paths10798<T[K], Prev10798[D]>> : never }[keyof T]
  : never;

type Prev10798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10798 {
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

type ConfigPaths10798 = Paths10798<NestedConfig10798>;

interface HeavyProps10798 {
  config: DeepPartial10798<NestedConfig10798>;
  path?: ConfigPaths10798;
}

const HeavyComponent10798 = memo(function HeavyComponent10798({ config }: HeavyProps10798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10798.displayName = 'HeavyComponent10798';
export default HeavyComponent10798;

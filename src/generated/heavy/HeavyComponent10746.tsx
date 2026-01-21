'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10746<T> = T extends (infer U)[]
  ? DeepReadonlyArray10746<U>
  : T extends object
  ? DeepReadonlyObject10746<T>
  : T;

interface DeepReadonlyArray10746<T> extends ReadonlyArray<DeepReadonly10746<T>> {}

type DeepReadonlyObject10746<T> = {
  readonly [P in keyof T]: DeepReadonly10746<T[P]>;
};

type UnionToIntersection10746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10746<T> = UnionToIntersection10746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10746<T extends unknown[], V> = [...T, V];

type TuplifyUnion10746<T, L = LastOf10746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10746<TuplifyUnion10746<Exclude<T, L>>, L>;

type DeepPartial10746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10746<T[P]> }
  : T;

type Paths10746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10746<K, Paths10746<T[K], Prev10746[D]>> : never }[keyof T]
  : never;

type Prev10746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10746 {
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

type ConfigPaths10746 = Paths10746<NestedConfig10746>;

interface HeavyProps10746 {
  config: DeepPartial10746<NestedConfig10746>;
  path?: ConfigPaths10746;
}

const HeavyComponent10746 = memo(function HeavyComponent10746({ config }: HeavyProps10746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10746.displayName = 'HeavyComponent10746';
export default HeavyComponent10746;

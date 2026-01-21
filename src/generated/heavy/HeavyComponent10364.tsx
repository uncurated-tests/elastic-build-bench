'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10364<T> = T extends (infer U)[]
  ? DeepReadonlyArray10364<U>
  : T extends object
  ? DeepReadonlyObject10364<T>
  : T;

interface DeepReadonlyArray10364<T> extends ReadonlyArray<DeepReadonly10364<T>> {}

type DeepReadonlyObject10364<T> = {
  readonly [P in keyof T]: DeepReadonly10364<T[P]>;
};

type UnionToIntersection10364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10364<T> = UnionToIntersection10364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10364<T extends unknown[], V> = [...T, V];

type TuplifyUnion10364<T, L = LastOf10364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10364<TuplifyUnion10364<Exclude<T, L>>, L>;

type DeepPartial10364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10364<T[P]> }
  : T;

type Paths10364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10364<K, Paths10364<T[K], Prev10364[D]>> : never }[keyof T]
  : never;

type Prev10364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10364 {
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

type ConfigPaths10364 = Paths10364<NestedConfig10364>;

interface HeavyProps10364 {
  config: DeepPartial10364<NestedConfig10364>;
  path?: ConfigPaths10364;
}

const HeavyComponent10364 = memo(function HeavyComponent10364({ config }: HeavyProps10364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10364.displayName = 'HeavyComponent10364';
export default HeavyComponent10364;

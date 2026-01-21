'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10420<T> = T extends (infer U)[]
  ? DeepReadonlyArray10420<U>
  : T extends object
  ? DeepReadonlyObject10420<T>
  : T;

interface DeepReadonlyArray10420<T> extends ReadonlyArray<DeepReadonly10420<T>> {}

type DeepReadonlyObject10420<T> = {
  readonly [P in keyof T]: DeepReadonly10420<T[P]>;
};

type UnionToIntersection10420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10420<T> = UnionToIntersection10420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10420<T extends unknown[], V> = [...T, V];

type TuplifyUnion10420<T, L = LastOf10420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10420<TuplifyUnion10420<Exclude<T, L>>, L>;

type DeepPartial10420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10420<T[P]> }
  : T;

type Paths10420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10420<K, Paths10420<T[K], Prev10420[D]>> : never }[keyof T]
  : never;

type Prev10420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10420 {
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

type ConfigPaths10420 = Paths10420<NestedConfig10420>;

interface HeavyProps10420 {
  config: DeepPartial10420<NestedConfig10420>;
  path?: ConfigPaths10420;
}

const HeavyComponent10420 = memo(function HeavyComponent10420({ config }: HeavyProps10420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10420.displayName = 'HeavyComponent10420';
export default HeavyComponent10420;

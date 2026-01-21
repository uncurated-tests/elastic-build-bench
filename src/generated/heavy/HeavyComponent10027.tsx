'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10027<T> = T extends (infer U)[]
  ? DeepReadonlyArray10027<U>
  : T extends object
  ? DeepReadonlyObject10027<T>
  : T;

interface DeepReadonlyArray10027<T> extends ReadonlyArray<DeepReadonly10027<T>> {}

type DeepReadonlyObject10027<T> = {
  readonly [P in keyof T]: DeepReadonly10027<T[P]>;
};

type UnionToIntersection10027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10027<T> = UnionToIntersection10027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10027<T extends unknown[], V> = [...T, V];

type TuplifyUnion10027<T, L = LastOf10027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10027<TuplifyUnion10027<Exclude<T, L>>, L>;

type DeepPartial10027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10027<T[P]> }
  : T;

type Paths10027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10027<K, Paths10027<T[K], Prev10027[D]>> : never }[keyof T]
  : never;

type Prev10027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10027 {
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

type ConfigPaths10027 = Paths10027<NestedConfig10027>;

interface HeavyProps10027 {
  config: DeepPartial10027<NestedConfig10027>;
  path?: ConfigPaths10027;
}

const HeavyComponent10027 = memo(function HeavyComponent10027({ config }: HeavyProps10027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10027.displayName = 'HeavyComponent10027';
export default HeavyComponent10027;

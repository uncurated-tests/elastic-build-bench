'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10361<T> = T extends (infer U)[]
  ? DeepReadonlyArray10361<U>
  : T extends object
  ? DeepReadonlyObject10361<T>
  : T;

interface DeepReadonlyArray10361<T> extends ReadonlyArray<DeepReadonly10361<T>> {}

type DeepReadonlyObject10361<T> = {
  readonly [P in keyof T]: DeepReadonly10361<T[P]>;
};

type UnionToIntersection10361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10361<T> = UnionToIntersection10361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10361<T extends unknown[], V> = [...T, V];

type TuplifyUnion10361<T, L = LastOf10361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10361<TuplifyUnion10361<Exclude<T, L>>, L>;

type DeepPartial10361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10361<T[P]> }
  : T;

type Paths10361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10361<K, Paths10361<T[K], Prev10361[D]>> : never }[keyof T]
  : never;

type Prev10361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10361 {
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

type ConfigPaths10361 = Paths10361<NestedConfig10361>;

interface HeavyProps10361 {
  config: DeepPartial10361<NestedConfig10361>;
  path?: ConfigPaths10361;
}

const HeavyComponent10361 = memo(function HeavyComponent10361({ config }: HeavyProps10361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10361.displayName = 'HeavyComponent10361';
export default HeavyComponent10361;

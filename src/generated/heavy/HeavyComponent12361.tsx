'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12361<T> = T extends (infer U)[]
  ? DeepReadonlyArray12361<U>
  : T extends object
  ? DeepReadonlyObject12361<T>
  : T;

interface DeepReadonlyArray12361<T> extends ReadonlyArray<DeepReadonly12361<T>> {}

type DeepReadonlyObject12361<T> = {
  readonly [P in keyof T]: DeepReadonly12361<T[P]>;
};

type UnionToIntersection12361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12361<T> = UnionToIntersection12361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12361<T extends unknown[], V> = [...T, V];

type TuplifyUnion12361<T, L = LastOf12361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12361<TuplifyUnion12361<Exclude<T, L>>, L>;

type DeepPartial12361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12361<T[P]> }
  : T;

type Paths12361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12361<K, Paths12361<T[K], Prev12361[D]>> : never }[keyof T]
  : never;

type Prev12361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12361 {
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

type ConfigPaths12361 = Paths12361<NestedConfig12361>;

interface HeavyProps12361 {
  config: DeepPartial12361<NestedConfig12361>;
  path?: ConfigPaths12361;
}

const HeavyComponent12361 = memo(function HeavyComponent12361({ config }: HeavyProps12361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12361.displayName = 'HeavyComponent12361';
export default HeavyComponent12361;

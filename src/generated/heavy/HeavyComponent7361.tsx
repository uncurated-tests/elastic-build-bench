'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7361<T> = T extends (infer U)[]
  ? DeepReadonlyArray7361<U>
  : T extends object
  ? DeepReadonlyObject7361<T>
  : T;

interface DeepReadonlyArray7361<T> extends ReadonlyArray<DeepReadonly7361<T>> {}

type DeepReadonlyObject7361<T> = {
  readonly [P in keyof T]: DeepReadonly7361<T[P]>;
};

type UnionToIntersection7361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7361<T> = UnionToIntersection7361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7361<T extends unknown[], V> = [...T, V];

type TuplifyUnion7361<T, L = LastOf7361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7361<TuplifyUnion7361<Exclude<T, L>>, L>;

type DeepPartial7361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7361<T[P]> }
  : T;

type Paths7361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7361<K, Paths7361<T[K], Prev7361[D]>> : never }[keyof T]
  : never;

type Prev7361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7361 {
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

type ConfigPaths7361 = Paths7361<NestedConfig7361>;

interface HeavyProps7361 {
  config: DeepPartial7361<NestedConfig7361>;
  path?: ConfigPaths7361;
}

const HeavyComponent7361 = memo(function HeavyComponent7361({ config }: HeavyProps7361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7361.displayName = 'HeavyComponent7361';
export default HeavyComponent7361;

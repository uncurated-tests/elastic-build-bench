'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1361<T> = T extends (infer U)[]
  ? DeepReadonlyArray1361<U>
  : T extends object
  ? DeepReadonlyObject1361<T>
  : T;

interface DeepReadonlyArray1361<T> extends ReadonlyArray<DeepReadonly1361<T>> {}

type DeepReadonlyObject1361<T> = {
  readonly [P in keyof T]: DeepReadonly1361<T[P]>;
};

type UnionToIntersection1361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1361<T> = UnionToIntersection1361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1361<T extends unknown[], V> = [...T, V];

type TuplifyUnion1361<T, L = LastOf1361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1361<TuplifyUnion1361<Exclude<T, L>>, L>;

type DeepPartial1361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1361<T[P]> }
  : T;

type Paths1361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1361<K, Paths1361<T[K], Prev1361[D]>> : never }[keyof T]
  : never;

type Prev1361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1361 {
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

type ConfigPaths1361 = Paths1361<NestedConfig1361>;

interface HeavyProps1361 {
  config: DeepPartial1361<NestedConfig1361>;
  path?: ConfigPaths1361;
}

const HeavyComponent1361 = memo(function HeavyComponent1361({ config }: HeavyProps1361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1361.displayName = 'HeavyComponent1361';
export default HeavyComponent1361;

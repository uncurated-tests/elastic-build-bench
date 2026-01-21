'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1277<T> = T extends (infer U)[]
  ? DeepReadonlyArray1277<U>
  : T extends object
  ? DeepReadonlyObject1277<T>
  : T;

interface DeepReadonlyArray1277<T> extends ReadonlyArray<DeepReadonly1277<T>> {}

type DeepReadonlyObject1277<T> = {
  readonly [P in keyof T]: DeepReadonly1277<T[P]>;
};

type UnionToIntersection1277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1277<T> = UnionToIntersection1277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1277<T extends unknown[], V> = [...T, V];

type TuplifyUnion1277<T, L = LastOf1277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1277<TuplifyUnion1277<Exclude<T, L>>, L>;

type DeepPartial1277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1277<T[P]> }
  : T;

type Paths1277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1277<K, Paths1277<T[K], Prev1277[D]>> : never }[keyof T]
  : never;

type Prev1277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1277 {
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

type ConfigPaths1277 = Paths1277<NestedConfig1277>;

interface HeavyProps1277 {
  config: DeepPartial1277<NestedConfig1277>;
  path?: ConfigPaths1277;
}

const HeavyComponent1277 = memo(function HeavyComponent1277({ config }: HeavyProps1277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1277.displayName = 'HeavyComponent1277';
export default HeavyComponent1277;

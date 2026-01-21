'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1521<T> = T extends (infer U)[]
  ? DeepReadonlyArray1521<U>
  : T extends object
  ? DeepReadonlyObject1521<T>
  : T;

interface DeepReadonlyArray1521<T> extends ReadonlyArray<DeepReadonly1521<T>> {}

type DeepReadonlyObject1521<T> = {
  readonly [P in keyof T]: DeepReadonly1521<T[P]>;
};

type UnionToIntersection1521<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1521<T> = UnionToIntersection1521<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1521<T extends unknown[], V> = [...T, V];

type TuplifyUnion1521<T, L = LastOf1521<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1521<TuplifyUnion1521<Exclude<T, L>>, L>;

type DeepPartial1521<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1521<T[P]> }
  : T;

type Paths1521<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1521<K, Paths1521<T[K], Prev1521[D]>> : never }[keyof T]
  : never;

type Prev1521 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1521<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1521 {
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

type ConfigPaths1521 = Paths1521<NestedConfig1521>;

interface HeavyProps1521 {
  config: DeepPartial1521<NestedConfig1521>;
  path?: ConfigPaths1521;
}

const HeavyComponent1521 = memo(function HeavyComponent1521({ config }: HeavyProps1521) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1521) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1521 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1521: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1521.displayName = 'HeavyComponent1521';
export default HeavyComponent1521;

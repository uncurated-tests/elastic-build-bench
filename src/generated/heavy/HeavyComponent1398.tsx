'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1398<T> = T extends (infer U)[]
  ? DeepReadonlyArray1398<U>
  : T extends object
  ? DeepReadonlyObject1398<T>
  : T;

interface DeepReadonlyArray1398<T> extends ReadonlyArray<DeepReadonly1398<T>> {}

type DeepReadonlyObject1398<T> = {
  readonly [P in keyof T]: DeepReadonly1398<T[P]>;
};

type UnionToIntersection1398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1398<T> = UnionToIntersection1398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1398<T extends unknown[], V> = [...T, V];

type TuplifyUnion1398<T, L = LastOf1398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1398<TuplifyUnion1398<Exclude<T, L>>, L>;

type DeepPartial1398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1398<T[P]> }
  : T;

type Paths1398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1398<K, Paths1398<T[K], Prev1398[D]>> : never }[keyof T]
  : never;

type Prev1398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1398 {
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

type ConfigPaths1398 = Paths1398<NestedConfig1398>;

interface HeavyProps1398 {
  config: DeepPartial1398<NestedConfig1398>;
  path?: ConfigPaths1398;
}

const HeavyComponent1398 = memo(function HeavyComponent1398({ config }: HeavyProps1398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1398.displayName = 'HeavyComponent1398';
export default HeavyComponent1398;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1239<T> = T extends (infer U)[]
  ? DeepReadonlyArray1239<U>
  : T extends object
  ? DeepReadonlyObject1239<T>
  : T;

interface DeepReadonlyArray1239<T> extends ReadonlyArray<DeepReadonly1239<T>> {}

type DeepReadonlyObject1239<T> = {
  readonly [P in keyof T]: DeepReadonly1239<T[P]>;
};

type UnionToIntersection1239<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1239<T> = UnionToIntersection1239<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1239<T extends unknown[], V> = [...T, V];

type TuplifyUnion1239<T, L = LastOf1239<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1239<TuplifyUnion1239<Exclude<T, L>>, L>;

type DeepPartial1239<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1239<T[P]> }
  : T;

type Paths1239<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1239<K, Paths1239<T[K], Prev1239[D]>> : never }[keyof T]
  : never;

type Prev1239 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1239<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1239 {
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

type ConfigPaths1239 = Paths1239<NestedConfig1239>;

interface HeavyProps1239 {
  config: DeepPartial1239<NestedConfig1239>;
  path?: ConfigPaths1239;
}

const HeavyComponent1239 = memo(function HeavyComponent1239({ config }: HeavyProps1239) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1239) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1239 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1239: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1239.displayName = 'HeavyComponent1239';
export default HeavyComponent1239;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1414<T> = T extends (infer U)[]
  ? DeepReadonlyArray1414<U>
  : T extends object
  ? DeepReadonlyObject1414<T>
  : T;

interface DeepReadonlyArray1414<T> extends ReadonlyArray<DeepReadonly1414<T>> {}

type DeepReadonlyObject1414<T> = {
  readonly [P in keyof T]: DeepReadonly1414<T[P]>;
};

type UnionToIntersection1414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1414<T> = UnionToIntersection1414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1414<T extends unknown[], V> = [...T, V];

type TuplifyUnion1414<T, L = LastOf1414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1414<TuplifyUnion1414<Exclude<T, L>>, L>;

type DeepPartial1414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1414<T[P]> }
  : T;

type Paths1414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1414<K, Paths1414<T[K], Prev1414[D]>> : never }[keyof T]
  : never;

type Prev1414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1414 {
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

type ConfigPaths1414 = Paths1414<NestedConfig1414>;

interface HeavyProps1414 {
  config: DeepPartial1414<NestedConfig1414>;
  path?: ConfigPaths1414;
}

const HeavyComponent1414 = memo(function HeavyComponent1414({ config }: HeavyProps1414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1414.displayName = 'HeavyComponent1414';
export default HeavyComponent1414;

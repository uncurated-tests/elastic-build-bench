'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1088<T> = T extends (infer U)[]
  ? DeepReadonlyArray1088<U>
  : T extends object
  ? DeepReadonlyObject1088<T>
  : T;

interface DeepReadonlyArray1088<T> extends ReadonlyArray<DeepReadonly1088<T>> {}

type DeepReadonlyObject1088<T> = {
  readonly [P in keyof T]: DeepReadonly1088<T[P]>;
};

type UnionToIntersection1088<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1088<T> = UnionToIntersection1088<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1088<T extends unknown[], V> = [...T, V];

type TuplifyUnion1088<T, L = LastOf1088<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1088<TuplifyUnion1088<Exclude<T, L>>, L>;

type DeepPartial1088<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1088<T[P]> }
  : T;

type Paths1088<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1088<K, Paths1088<T[K], Prev1088[D]>> : never }[keyof T]
  : never;

type Prev1088 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1088<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1088 {
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

type ConfigPaths1088 = Paths1088<NestedConfig1088>;

interface HeavyProps1088 {
  config: DeepPartial1088<NestedConfig1088>;
  path?: ConfigPaths1088;
}

const HeavyComponent1088 = memo(function HeavyComponent1088({ config }: HeavyProps1088) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1088) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1088 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1088: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1088.displayName = 'HeavyComponent1088';
export default HeavyComponent1088;

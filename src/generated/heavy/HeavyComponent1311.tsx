'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1311<T> = T extends (infer U)[]
  ? DeepReadonlyArray1311<U>
  : T extends object
  ? DeepReadonlyObject1311<T>
  : T;

interface DeepReadonlyArray1311<T> extends ReadonlyArray<DeepReadonly1311<T>> {}

type DeepReadonlyObject1311<T> = {
  readonly [P in keyof T]: DeepReadonly1311<T[P]>;
};

type UnionToIntersection1311<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1311<T> = UnionToIntersection1311<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1311<T extends unknown[], V> = [...T, V];

type TuplifyUnion1311<T, L = LastOf1311<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1311<TuplifyUnion1311<Exclude<T, L>>, L>;

type DeepPartial1311<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1311<T[P]> }
  : T;

type Paths1311<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1311<K, Paths1311<T[K], Prev1311[D]>> : never }[keyof T]
  : never;

type Prev1311 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1311<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1311 {
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

type ConfigPaths1311 = Paths1311<NestedConfig1311>;

interface HeavyProps1311 {
  config: DeepPartial1311<NestedConfig1311>;
  path?: ConfigPaths1311;
}

const HeavyComponent1311 = memo(function HeavyComponent1311({ config }: HeavyProps1311) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1311) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1311 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1311: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1311.displayName = 'HeavyComponent1311';
export default HeavyComponent1311;

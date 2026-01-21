'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1212<T> = T extends (infer U)[]
  ? DeepReadonlyArray1212<U>
  : T extends object
  ? DeepReadonlyObject1212<T>
  : T;

interface DeepReadonlyArray1212<T> extends ReadonlyArray<DeepReadonly1212<T>> {}

type DeepReadonlyObject1212<T> = {
  readonly [P in keyof T]: DeepReadonly1212<T[P]>;
};

type UnionToIntersection1212<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1212<T> = UnionToIntersection1212<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1212<T extends unknown[], V> = [...T, V];

type TuplifyUnion1212<T, L = LastOf1212<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1212<TuplifyUnion1212<Exclude<T, L>>, L>;

type DeepPartial1212<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1212<T[P]> }
  : T;

type Paths1212<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1212<K, Paths1212<T[K], Prev1212[D]>> : never }[keyof T]
  : never;

type Prev1212 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1212<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1212 {
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

type ConfigPaths1212 = Paths1212<NestedConfig1212>;

interface HeavyProps1212 {
  config: DeepPartial1212<NestedConfig1212>;
  path?: ConfigPaths1212;
}

const HeavyComponent1212 = memo(function HeavyComponent1212({ config }: HeavyProps1212) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1212) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1212 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1212: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1212.displayName = 'HeavyComponent1212';
export default HeavyComponent1212;

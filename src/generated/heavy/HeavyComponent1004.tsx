'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1004<T> = T extends (infer U)[]
  ? DeepReadonlyArray1004<U>
  : T extends object
  ? DeepReadonlyObject1004<T>
  : T;

interface DeepReadonlyArray1004<T> extends ReadonlyArray<DeepReadonly1004<T>> {}

type DeepReadonlyObject1004<T> = {
  readonly [P in keyof T]: DeepReadonly1004<T[P]>;
};

type UnionToIntersection1004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1004<T> = UnionToIntersection1004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1004<T extends unknown[], V> = [...T, V];

type TuplifyUnion1004<T, L = LastOf1004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1004<TuplifyUnion1004<Exclude<T, L>>, L>;

type DeepPartial1004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1004<T[P]> }
  : T;

type Paths1004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1004<K, Paths1004<T[K], Prev1004[D]>> : never }[keyof T]
  : never;

type Prev1004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1004 {
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

type ConfigPaths1004 = Paths1004<NestedConfig1004>;

interface HeavyProps1004 {
  config: DeepPartial1004<NestedConfig1004>;
  path?: ConfigPaths1004;
}

const HeavyComponent1004 = memo(function HeavyComponent1004({ config }: HeavyProps1004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1004.displayName = 'HeavyComponent1004';
export default HeavyComponent1004;

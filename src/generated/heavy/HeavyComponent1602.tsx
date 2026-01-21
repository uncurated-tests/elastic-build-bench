'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1602<T> = T extends (infer U)[]
  ? DeepReadonlyArray1602<U>
  : T extends object
  ? DeepReadonlyObject1602<T>
  : T;

interface DeepReadonlyArray1602<T> extends ReadonlyArray<DeepReadonly1602<T>> {}

type DeepReadonlyObject1602<T> = {
  readonly [P in keyof T]: DeepReadonly1602<T[P]>;
};

type UnionToIntersection1602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1602<T> = UnionToIntersection1602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1602<T extends unknown[], V> = [...T, V];

type TuplifyUnion1602<T, L = LastOf1602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1602<TuplifyUnion1602<Exclude<T, L>>, L>;

type DeepPartial1602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1602<T[P]> }
  : T;

type Paths1602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1602<K, Paths1602<T[K], Prev1602[D]>> : never }[keyof T]
  : never;

type Prev1602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1602 {
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

type ConfigPaths1602 = Paths1602<NestedConfig1602>;

interface HeavyProps1602 {
  config: DeepPartial1602<NestedConfig1602>;
  path?: ConfigPaths1602;
}

const HeavyComponent1602 = memo(function HeavyComponent1602({ config }: HeavyProps1602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1602.displayName = 'HeavyComponent1602';
export default HeavyComponent1602;

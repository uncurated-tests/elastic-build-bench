'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1387<T> = T extends (infer U)[]
  ? DeepReadonlyArray1387<U>
  : T extends object
  ? DeepReadonlyObject1387<T>
  : T;

interface DeepReadonlyArray1387<T> extends ReadonlyArray<DeepReadonly1387<T>> {}

type DeepReadonlyObject1387<T> = {
  readonly [P in keyof T]: DeepReadonly1387<T[P]>;
};

type UnionToIntersection1387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1387<T> = UnionToIntersection1387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1387<T extends unknown[], V> = [...T, V];

type TuplifyUnion1387<T, L = LastOf1387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1387<TuplifyUnion1387<Exclude<T, L>>, L>;

type DeepPartial1387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1387<T[P]> }
  : T;

type Paths1387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1387<K, Paths1387<T[K], Prev1387[D]>> : never }[keyof T]
  : never;

type Prev1387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1387 {
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

type ConfigPaths1387 = Paths1387<NestedConfig1387>;

interface HeavyProps1387 {
  config: DeepPartial1387<NestedConfig1387>;
  path?: ConfigPaths1387;
}

const HeavyComponent1387 = memo(function HeavyComponent1387({ config }: HeavyProps1387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1387.displayName = 'HeavyComponent1387';
export default HeavyComponent1387;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1399<T> = T extends (infer U)[]
  ? DeepReadonlyArray1399<U>
  : T extends object
  ? DeepReadonlyObject1399<T>
  : T;

interface DeepReadonlyArray1399<T> extends ReadonlyArray<DeepReadonly1399<T>> {}

type DeepReadonlyObject1399<T> = {
  readonly [P in keyof T]: DeepReadonly1399<T[P]>;
};

type UnionToIntersection1399<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1399<T> = UnionToIntersection1399<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1399<T extends unknown[], V> = [...T, V];

type TuplifyUnion1399<T, L = LastOf1399<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1399<TuplifyUnion1399<Exclude<T, L>>, L>;

type DeepPartial1399<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1399<T[P]> }
  : T;

type Paths1399<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1399<K, Paths1399<T[K], Prev1399[D]>> : never }[keyof T]
  : never;

type Prev1399 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1399<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1399 {
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

type ConfigPaths1399 = Paths1399<NestedConfig1399>;

interface HeavyProps1399 {
  config: DeepPartial1399<NestedConfig1399>;
  path?: ConfigPaths1399;
}

const HeavyComponent1399 = memo(function HeavyComponent1399({ config }: HeavyProps1399) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1399) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1399 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1399: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1399.displayName = 'HeavyComponent1399';
export default HeavyComponent1399;

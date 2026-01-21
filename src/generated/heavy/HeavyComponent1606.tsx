'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1606<T> = T extends (infer U)[]
  ? DeepReadonlyArray1606<U>
  : T extends object
  ? DeepReadonlyObject1606<T>
  : T;

interface DeepReadonlyArray1606<T> extends ReadonlyArray<DeepReadonly1606<T>> {}

type DeepReadonlyObject1606<T> = {
  readonly [P in keyof T]: DeepReadonly1606<T[P]>;
};

type UnionToIntersection1606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1606<T> = UnionToIntersection1606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1606<T extends unknown[], V> = [...T, V];

type TuplifyUnion1606<T, L = LastOf1606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1606<TuplifyUnion1606<Exclude<T, L>>, L>;

type DeepPartial1606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1606<T[P]> }
  : T;

type Paths1606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1606<K, Paths1606<T[K], Prev1606[D]>> : never }[keyof T]
  : never;

type Prev1606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1606 {
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

type ConfigPaths1606 = Paths1606<NestedConfig1606>;

interface HeavyProps1606 {
  config: DeepPartial1606<NestedConfig1606>;
  path?: ConfigPaths1606;
}

const HeavyComponent1606 = memo(function HeavyComponent1606({ config }: HeavyProps1606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1606.displayName = 'HeavyComponent1606';
export default HeavyComponent1606;

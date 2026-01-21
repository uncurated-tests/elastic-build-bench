'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1236<T> = T extends (infer U)[]
  ? DeepReadonlyArray1236<U>
  : T extends object
  ? DeepReadonlyObject1236<T>
  : T;

interface DeepReadonlyArray1236<T> extends ReadonlyArray<DeepReadonly1236<T>> {}

type DeepReadonlyObject1236<T> = {
  readonly [P in keyof T]: DeepReadonly1236<T[P]>;
};

type UnionToIntersection1236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1236<T> = UnionToIntersection1236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1236<T extends unknown[], V> = [...T, V];

type TuplifyUnion1236<T, L = LastOf1236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1236<TuplifyUnion1236<Exclude<T, L>>, L>;

type DeepPartial1236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1236<T[P]> }
  : T;

type Paths1236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1236<K, Paths1236<T[K], Prev1236[D]>> : never }[keyof T]
  : never;

type Prev1236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1236 {
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

type ConfigPaths1236 = Paths1236<NestedConfig1236>;

interface HeavyProps1236 {
  config: DeepPartial1236<NestedConfig1236>;
  path?: ConfigPaths1236;
}

const HeavyComponent1236 = memo(function HeavyComponent1236({ config }: HeavyProps1236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1236.displayName = 'HeavyComponent1236';
export default HeavyComponent1236;

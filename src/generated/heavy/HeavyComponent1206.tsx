'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1206<T> = T extends (infer U)[]
  ? DeepReadonlyArray1206<U>
  : T extends object
  ? DeepReadonlyObject1206<T>
  : T;

interface DeepReadonlyArray1206<T> extends ReadonlyArray<DeepReadonly1206<T>> {}

type DeepReadonlyObject1206<T> = {
  readonly [P in keyof T]: DeepReadonly1206<T[P]>;
};

type UnionToIntersection1206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1206<T> = UnionToIntersection1206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1206<T extends unknown[], V> = [...T, V];

type TuplifyUnion1206<T, L = LastOf1206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1206<TuplifyUnion1206<Exclude<T, L>>, L>;

type DeepPartial1206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1206<T[P]> }
  : T;

type Paths1206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1206<K, Paths1206<T[K], Prev1206[D]>> : never }[keyof T]
  : never;

type Prev1206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1206 {
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

type ConfigPaths1206 = Paths1206<NestedConfig1206>;

interface HeavyProps1206 {
  config: DeepPartial1206<NestedConfig1206>;
  path?: ConfigPaths1206;
}

const HeavyComponent1206 = memo(function HeavyComponent1206({ config }: HeavyProps1206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1206.displayName = 'HeavyComponent1206';
export default HeavyComponent1206;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1091<T> = T extends (infer U)[]
  ? DeepReadonlyArray1091<U>
  : T extends object
  ? DeepReadonlyObject1091<T>
  : T;

interface DeepReadonlyArray1091<T> extends ReadonlyArray<DeepReadonly1091<T>> {}

type DeepReadonlyObject1091<T> = {
  readonly [P in keyof T]: DeepReadonly1091<T[P]>;
};

type UnionToIntersection1091<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1091<T> = UnionToIntersection1091<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1091<T extends unknown[], V> = [...T, V];

type TuplifyUnion1091<T, L = LastOf1091<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1091<TuplifyUnion1091<Exclude<T, L>>, L>;

type DeepPartial1091<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1091<T[P]> }
  : T;

type Paths1091<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1091<K, Paths1091<T[K], Prev1091[D]>> : never }[keyof T]
  : never;

type Prev1091 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1091<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1091 {
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

type ConfigPaths1091 = Paths1091<NestedConfig1091>;

interface HeavyProps1091 {
  config: DeepPartial1091<NestedConfig1091>;
  path?: ConfigPaths1091;
}

const HeavyComponent1091 = memo(function HeavyComponent1091({ config }: HeavyProps1091) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1091) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1091 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1091: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1091.displayName = 'HeavyComponent1091';
export default HeavyComponent1091;

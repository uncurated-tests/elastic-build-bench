'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1151<T> = T extends (infer U)[]
  ? DeepReadonlyArray1151<U>
  : T extends object
  ? DeepReadonlyObject1151<T>
  : T;

interface DeepReadonlyArray1151<T> extends ReadonlyArray<DeepReadonly1151<T>> {}

type DeepReadonlyObject1151<T> = {
  readonly [P in keyof T]: DeepReadonly1151<T[P]>;
};

type UnionToIntersection1151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1151<T> = UnionToIntersection1151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1151<T extends unknown[], V> = [...T, V];

type TuplifyUnion1151<T, L = LastOf1151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1151<TuplifyUnion1151<Exclude<T, L>>, L>;

type DeepPartial1151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1151<T[P]> }
  : T;

type Paths1151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1151<K, Paths1151<T[K], Prev1151[D]>> : never }[keyof T]
  : never;

type Prev1151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1151 {
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

type ConfigPaths1151 = Paths1151<NestedConfig1151>;

interface HeavyProps1151 {
  config: DeepPartial1151<NestedConfig1151>;
  path?: ConfigPaths1151;
}

const HeavyComponent1151 = memo(function HeavyComponent1151({ config }: HeavyProps1151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1151.displayName = 'HeavyComponent1151';
export default HeavyComponent1151;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1312<T> = T extends (infer U)[]
  ? DeepReadonlyArray1312<U>
  : T extends object
  ? DeepReadonlyObject1312<T>
  : T;

interface DeepReadonlyArray1312<T> extends ReadonlyArray<DeepReadonly1312<T>> {}

type DeepReadonlyObject1312<T> = {
  readonly [P in keyof T]: DeepReadonly1312<T[P]>;
};

type UnionToIntersection1312<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1312<T> = UnionToIntersection1312<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1312<T extends unknown[], V> = [...T, V];

type TuplifyUnion1312<T, L = LastOf1312<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1312<TuplifyUnion1312<Exclude<T, L>>, L>;

type DeepPartial1312<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1312<T[P]> }
  : T;

type Paths1312<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1312<K, Paths1312<T[K], Prev1312[D]>> : never }[keyof T]
  : never;

type Prev1312 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1312<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1312 {
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

type ConfigPaths1312 = Paths1312<NestedConfig1312>;

interface HeavyProps1312 {
  config: DeepPartial1312<NestedConfig1312>;
  path?: ConfigPaths1312;
}

const HeavyComponent1312 = memo(function HeavyComponent1312({ config }: HeavyProps1312) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1312) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1312 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1312: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1312.displayName = 'HeavyComponent1312';
export default HeavyComponent1312;

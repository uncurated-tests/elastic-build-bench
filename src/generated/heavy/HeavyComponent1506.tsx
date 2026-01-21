'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1506<T> = T extends (infer U)[]
  ? DeepReadonlyArray1506<U>
  : T extends object
  ? DeepReadonlyObject1506<T>
  : T;

interface DeepReadonlyArray1506<T> extends ReadonlyArray<DeepReadonly1506<T>> {}

type DeepReadonlyObject1506<T> = {
  readonly [P in keyof T]: DeepReadonly1506<T[P]>;
};

type UnionToIntersection1506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1506<T> = UnionToIntersection1506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1506<T extends unknown[], V> = [...T, V];

type TuplifyUnion1506<T, L = LastOf1506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1506<TuplifyUnion1506<Exclude<T, L>>, L>;

type DeepPartial1506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1506<T[P]> }
  : T;

type Paths1506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1506<K, Paths1506<T[K], Prev1506[D]>> : never }[keyof T]
  : never;

type Prev1506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1506 {
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

type ConfigPaths1506 = Paths1506<NestedConfig1506>;

interface HeavyProps1506 {
  config: DeepPartial1506<NestedConfig1506>;
  path?: ConfigPaths1506;
}

const HeavyComponent1506 = memo(function HeavyComponent1506({ config }: HeavyProps1506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1506.displayName = 'HeavyComponent1506';
export default HeavyComponent1506;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1499<T> = T extends (infer U)[]
  ? DeepReadonlyArray1499<U>
  : T extends object
  ? DeepReadonlyObject1499<T>
  : T;

interface DeepReadonlyArray1499<T> extends ReadonlyArray<DeepReadonly1499<T>> {}

type DeepReadonlyObject1499<T> = {
  readonly [P in keyof T]: DeepReadonly1499<T[P]>;
};

type UnionToIntersection1499<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1499<T> = UnionToIntersection1499<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1499<T extends unknown[], V> = [...T, V];

type TuplifyUnion1499<T, L = LastOf1499<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1499<TuplifyUnion1499<Exclude<T, L>>, L>;

type DeepPartial1499<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1499<T[P]> }
  : T;

type Paths1499<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1499<K, Paths1499<T[K], Prev1499[D]>> : never }[keyof T]
  : never;

type Prev1499 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1499<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1499 {
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

type ConfigPaths1499 = Paths1499<NestedConfig1499>;

interface HeavyProps1499 {
  config: DeepPartial1499<NestedConfig1499>;
  path?: ConfigPaths1499;
}

const HeavyComponent1499 = memo(function HeavyComponent1499({ config }: HeavyProps1499) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1499) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1499 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1499: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1499.displayName = 'HeavyComponent1499';
export default HeavyComponent1499;

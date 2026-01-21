'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1479<T> = T extends (infer U)[]
  ? DeepReadonlyArray1479<U>
  : T extends object
  ? DeepReadonlyObject1479<T>
  : T;

interface DeepReadonlyArray1479<T> extends ReadonlyArray<DeepReadonly1479<T>> {}

type DeepReadonlyObject1479<T> = {
  readonly [P in keyof T]: DeepReadonly1479<T[P]>;
};

type UnionToIntersection1479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1479<T> = UnionToIntersection1479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1479<T extends unknown[], V> = [...T, V];

type TuplifyUnion1479<T, L = LastOf1479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1479<TuplifyUnion1479<Exclude<T, L>>, L>;

type DeepPartial1479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1479<T[P]> }
  : T;

type Paths1479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1479<K, Paths1479<T[K], Prev1479[D]>> : never }[keyof T]
  : never;

type Prev1479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1479 {
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

type ConfigPaths1479 = Paths1479<NestedConfig1479>;

interface HeavyProps1479 {
  config: DeepPartial1479<NestedConfig1479>;
  path?: ConfigPaths1479;
}

const HeavyComponent1479 = memo(function HeavyComponent1479({ config }: HeavyProps1479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1479.displayName = 'HeavyComponent1479';
export default HeavyComponent1479;

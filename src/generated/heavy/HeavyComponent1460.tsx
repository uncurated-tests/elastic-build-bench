'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1460<T> = T extends (infer U)[]
  ? DeepReadonlyArray1460<U>
  : T extends object
  ? DeepReadonlyObject1460<T>
  : T;

interface DeepReadonlyArray1460<T> extends ReadonlyArray<DeepReadonly1460<T>> {}

type DeepReadonlyObject1460<T> = {
  readonly [P in keyof T]: DeepReadonly1460<T[P]>;
};

type UnionToIntersection1460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1460<T> = UnionToIntersection1460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1460<T extends unknown[], V> = [...T, V];

type TuplifyUnion1460<T, L = LastOf1460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1460<TuplifyUnion1460<Exclude<T, L>>, L>;

type DeepPartial1460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1460<T[P]> }
  : T;

type Paths1460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1460<K, Paths1460<T[K], Prev1460[D]>> : never }[keyof T]
  : never;

type Prev1460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1460 {
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

type ConfigPaths1460 = Paths1460<NestedConfig1460>;

interface HeavyProps1460 {
  config: DeepPartial1460<NestedConfig1460>;
  path?: ConfigPaths1460;
}

const HeavyComponent1460 = memo(function HeavyComponent1460({ config }: HeavyProps1460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1460.displayName = 'HeavyComponent1460';
export default HeavyComponent1460;

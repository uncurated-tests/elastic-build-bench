'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1757<T> = T extends (infer U)[]
  ? DeepReadonlyArray1757<U>
  : T extends object
  ? DeepReadonlyObject1757<T>
  : T;

interface DeepReadonlyArray1757<T> extends ReadonlyArray<DeepReadonly1757<T>> {}

type DeepReadonlyObject1757<T> = {
  readonly [P in keyof T]: DeepReadonly1757<T[P]>;
};

type UnionToIntersection1757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1757<T> = UnionToIntersection1757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1757<T extends unknown[], V> = [...T, V];

type TuplifyUnion1757<T, L = LastOf1757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1757<TuplifyUnion1757<Exclude<T, L>>, L>;

type DeepPartial1757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1757<T[P]> }
  : T;

type Paths1757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1757<K, Paths1757<T[K], Prev1757[D]>> : never }[keyof T]
  : never;

type Prev1757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1757 {
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

type ConfigPaths1757 = Paths1757<NestedConfig1757>;

interface HeavyProps1757 {
  config: DeepPartial1757<NestedConfig1757>;
  path?: ConfigPaths1757;
}

const HeavyComponent1757 = memo(function HeavyComponent1757({ config }: HeavyProps1757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1757.displayName = 'HeavyComponent1757';
export default HeavyComponent1757;

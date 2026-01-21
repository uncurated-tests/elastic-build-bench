'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1762<T> = T extends (infer U)[]
  ? DeepReadonlyArray1762<U>
  : T extends object
  ? DeepReadonlyObject1762<T>
  : T;

interface DeepReadonlyArray1762<T> extends ReadonlyArray<DeepReadonly1762<T>> {}

type DeepReadonlyObject1762<T> = {
  readonly [P in keyof T]: DeepReadonly1762<T[P]>;
};

type UnionToIntersection1762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1762<T> = UnionToIntersection1762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1762<T extends unknown[], V> = [...T, V];

type TuplifyUnion1762<T, L = LastOf1762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1762<TuplifyUnion1762<Exclude<T, L>>, L>;

type DeepPartial1762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1762<T[P]> }
  : T;

type Paths1762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1762<K, Paths1762<T[K], Prev1762[D]>> : never }[keyof T]
  : never;

type Prev1762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1762 {
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

type ConfigPaths1762 = Paths1762<NestedConfig1762>;

interface HeavyProps1762 {
  config: DeepPartial1762<NestedConfig1762>;
  path?: ConfigPaths1762;
}

const HeavyComponent1762 = memo(function HeavyComponent1762({ config }: HeavyProps1762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1762.displayName = 'HeavyComponent1762';
export default HeavyComponent1762;

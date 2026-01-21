'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1464<T> = T extends (infer U)[]
  ? DeepReadonlyArray1464<U>
  : T extends object
  ? DeepReadonlyObject1464<T>
  : T;

interface DeepReadonlyArray1464<T> extends ReadonlyArray<DeepReadonly1464<T>> {}

type DeepReadonlyObject1464<T> = {
  readonly [P in keyof T]: DeepReadonly1464<T[P]>;
};

type UnionToIntersection1464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1464<T> = UnionToIntersection1464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1464<T extends unknown[], V> = [...T, V];

type TuplifyUnion1464<T, L = LastOf1464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1464<TuplifyUnion1464<Exclude<T, L>>, L>;

type DeepPartial1464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1464<T[P]> }
  : T;

type Paths1464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1464<K, Paths1464<T[K], Prev1464[D]>> : never }[keyof T]
  : never;

type Prev1464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1464 {
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

type ConfigPaths1464 = Paths1464<NestedConfig1464>;

interface HeavyProps1464 {
  config: DeepPartial1464<NestedConfig1464>;
  path?: ConfigPaths1464;
}

const HeavyComponent1464 = memo(function HeavyComponent1464({ config }: HeavyProps1464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1464.displayName = 'HeavyComponent1464';
export default HeavyComponent1464;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1795<T> = T extends (infer U)[]
  ? DeepReadonlyArray1795<U>
  : T extends object
  ? DeepReadonlyObject1795<T>
  : T;

interface DeepReadonlyArray1795<T> extends ReadonlyArray<DeepReadonly1795<T>> {}

type DeepReadonlyObject1795<T> = {
  readonly [P in keyof T]: DeepReadonly1795<T[P]>;
};

type UnionToIntersection1795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1795<T> = UnionToIntersection1795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1795<T extends unknown[], V> = [...T, V];

type TuplifyUnion1795<T, L = LastOf1795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1795<TuplifyUnion1795<Exclude<T, L>>, L>;

type DeepPartial1795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1795<T[P]> }
  : T;

type Paths1795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1795<K, Paths1795<T[K], Prev1795[D]>> : never }[keyof T]
  : never;

type Prev1795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1795 {
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

type ConfigPaths1795 = Paths1795<NestedConfig1795>;

interface HeavyProps1795 {
  config: DeepPartial1795<NestedConfig1795>;
  path?: ConfigPaths1795;
}

const HeavyComponent1795 = memo(function HeavyComponent1795({ config }: HeavyProps1795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1795.displayName = 'HeavyComponent1795';
export default HeavyComponent1795;

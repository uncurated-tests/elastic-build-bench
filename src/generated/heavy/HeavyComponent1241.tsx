'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1241<T> = T extends (infer U)[]
  ? DeepReadonlyArray1241<U>
  : T extends object
  ? DeepReadonlyObject1241<T>
  : T;

interface DeepReadonlyArray1241<T> extends ReadonlyArray<DeepReadonly1241<T>> {}

type DeepReadonlyObject1241<T> = {
  readonly [P in keyof T]: DeepReadonly1241<T[P]>;
};

type UnionToIntersection1241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1241<T> = UnionToIntersection1241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1241<T extends unknown[], V> = [...T, V];

type TuplifyUnion1241<T, L = LastOf1241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1241<TuplifyUnion1241<Exclude<T, L>>, L>;

type DeepPartial1241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1241<T[P]> }
  : T;

type Paths1241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1241<K, Paths1241<T[K], Prev1241[D]>> : never }[keyof T]
  : never;

type Prev1241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1241 {
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

type ConfigPaths1241 = Paths1241<NestedConfig1241>;

interface HeavyProps1241 {
  config: DeepPartial1241<NestedConfig1241>;
  path?: ConfigPaths1241;
}

const HeavyComponent1241 = memo(function HeavyComponent1241({ config }: HeavyProps1241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1241.displayName = 'HeavyComponent1241';
export default HeavyComponent1241;

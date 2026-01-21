'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1297<T> = T extends (infer U)[]
  ? DeepReadonlyArray1297<U>
  : T extends object
  ? DeepReadonlyObject1297<T>
  : T;

interface DeepReadonlyArray1297<T> extends ReadonlyArray<DeepReadonly1297<T>> {}

type DeepReadonlyObject1297<T> = {
  readonly [P in keyof T]: DeepReadonly1297<T[P]>;
};

type UnionToIntersection1297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1297<T> = UnionToIntersection1297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1297<T extends unknown[], V> = [...T, V];

type TuplifyUnion1297<T, L = LastOf1297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1297<TuplifyUnion1297<Exclude<T, L>>, L>;

type DeepPartial1297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1297<T[P]> }
  : T;

type Paths1297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1297<K, Paths1297<T[K], Prev1297[D]>> : never }[keyof T]
  : never;

type Prev1297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1297 {
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

type ConfigPaths1297 = Paths1297<NestedConfig1297>;

interface HeavyProps1297 {
  config: DeepPartial1297<NestedConfig1297>;
  path?: ConfigPaths1297;
}

const HeavyComponent1297 = memo(function HeavyComponent1297({ config }: HeavyProps1297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1297.displayName = 'HeavyComponent1297';
export default HeavyComponent1297;

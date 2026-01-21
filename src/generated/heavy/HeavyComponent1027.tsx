'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1027<T> = T extends (infer U)[]
  ? DeepReadonlyArray1027<U>
  : T extends object
  ? DeepReadonlyObject1027<T>
  : T;

interface DeepReadonlyArray1027<T> extends ReadonlyArray<DeepReadonly1027<T>> {}

type DeepReadonlyObject1027<T> = {
  readonly [P in keyof T]: DeepReadonly1027<T[P]>;
};

type UnionToIntersection1027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1027<T> = UnionToIntersection1027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1027<T extends unknown[], V> = [...T, V];

type TuplifyUnion1027<T, L = LastOf1027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1027<TuplifyUnion1027<Exclude<T, L>>, L>;

type DeepPartial1027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1027<T[P]> }
  : T;

type Paths1027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1027<K, Paths1027<T[K], Prev1027[D]>> : never }[keyof T]
  : never;

type Prev1027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1027 {
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

type ConfigPaths1027 = Paths1027<NestedConfig1027>;

interface HeavyProps1027 {
  config: DeepPartial1027<NestedConfig1027>;
  path?: ConfigPaths1027;
}

const HeavyComponent1027 = memo(function HeavyComponent1027({ config }: HeavyProps1027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1027.displayName = 'HeavyComponent1027';
export default HeavyComponent1027;

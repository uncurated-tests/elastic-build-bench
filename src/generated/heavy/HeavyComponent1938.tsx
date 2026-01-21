'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1938<T> = T extends (infer U)[]
  ? DeepReadonlyArray1938<U>
  : T extends object
  ? DeepReadonlyObject1938<T>
  : T;

interface DeepReadonlyArray1938<T> extends ReadonlyArray<DeepReadonly1938<T>> {}

type DeepReadonlyObject1938<T> = {
  readonly [P in keyof T]: DeepReadonly1938<T[P]>;
};

type UnionToIntersection1938<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1938<T> = UnionToIntersection1938<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1938<T extends unknown[], V> = [...T, V];

type TuplifyUnion1938<T, L = LastOf1938<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1938<TuplifyUnion1938<Exclude<T, L>>, L>;

type DeepPartial1938<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1938<T[P]> }
  : T;

type Paths1938<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1938<K, Paths1938<T[K], Prev1938[D]>> : never }[keyof T]
  : never;

type Prev1938 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1938<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1938 {
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

type ConfigPaths1938 = Paths1938<NestedConfig1938>;

interface HeavyProps1938 {
  config: DeepPartial1938<NestedConfig1938>;
  path?: ConfigPaths1938;
}

const HeavyComponent1938 = memo(function HeavyComponent1938({ config }: HeavyProps1938) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1938) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1938 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1938: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1938.displayName = 'HeavyComponent1938';
export default HeavyComponent1938;

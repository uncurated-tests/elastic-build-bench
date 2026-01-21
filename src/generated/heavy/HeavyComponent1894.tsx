'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1894<T> = T extends (infer U)[]
  ? DeepReadonlyArray1894<U>
  : T extends object
  ? DeepReadonlyObject1894<T>
  : T;

interface DeepReadonlyArray1894<T> extends ReadonlyArray<DeepReadonly1894<T>> {}

type DeepReadonlyObject1894<T> = {
  readonly [P in keyof T]: DeepReadonly1894<T[P]>;
};

type UnionToIntersection1894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1894<T> = UnionToIntersection1894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1894<T extends unknown[], V> = [...T, V];

type TuplifyUnion1894<T, L = LastOf1894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1894<TuplifyUnion1894<Exclude<T, L>>, L>;

type DeepPartial1894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1894<T[P]> }
  : T;

type Paths1894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1894<K, Paths1894<T[K], Prev1894[D]>> : never }[keyof T]
  : never;

type Prev1894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1894 {
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

type ConfigPaths1894 = Paths1894<NestedConfig1894>;

interface HeavyProps1894 {
  config: DeepPartial1894<NestedConfig1894>;
  path?: ConfigPaths1894;
}

const HeavyComponent1894 = memo(function HeavyComponent1894({ config }: HeavyProps1894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1894.displayName = 'HeavyComponent1894';
export default HeavyComponent1894;

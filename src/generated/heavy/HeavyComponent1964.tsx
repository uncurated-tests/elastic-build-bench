'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1964<T> = T extends (infer U)[]
  ? DeepReadonlyArray1964<U>
  : T extends object
  ? DeepReadonlyObject1964<T>
  : T;

interface DeepReadonlyArray1964<T> extends ReadonlyArray<DeepReadonly1964<T>> {}

type DeepReadonlyObject1964<T> = {
  readonly [P in keyof T]: DeepReadonly1964<T[P]>;
};

type UnionToIntersection1964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1964<T> = UnionToIntersection1964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1964<T extends unknown[], V> = [...T, V];

type TuplifyUnion1964<T, L = LastOf1964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1964<TuplifyUnion1964<Exclude<T, L>>, L>;

type DeepPartial1964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1964<T[P]> }
  : T;

type Paths1964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1964<K, Paths1964<T[K], Prev1964[D]>> : never }[keyof T]
  : never;

type Prev1964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1964 {
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

type ConfigPaths1964 = Paths1964<NestedConfig1964>;

interface HeavyProps1964 {
  config: DeepPartial1964<NestedConfig1964>;
  path?: ConfigPaths1964;
}

const HeavyComponent1964 = memo(function HeavyComponent1964({ config }: HeavyProps1964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1964.displayName = 'HeavyComponent1964';
export default HeavyComponent1964;

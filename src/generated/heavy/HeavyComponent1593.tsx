'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1593<T> = T extends (infer U)[]
  ? DeepReadonlyArray1593<U>
  : T extends object
  ? DeepReadonlyObject1593<T>
  : T;

interface DeepReadonlyArray1593<T> extends ReadonlyArray<DeepReadonly1593<T>> {}

type DeepReadonlyObject1593<T> = {
  readonly [P in keyof T]: DeepReadonly1593<T[P]>;
};

type UnionToIntersection1593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1593<T> = UnionToIntersection1593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1593<T extends unknown[], V> = [...T, V];

type TuplifyUnion1593<T, L = LastOf1593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1593<TuplifyUnion1593<Exclude<T, L>>, L>;

type DeepPartial1593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1593<T[P]> }
  : T;

type Paths1593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1593<K, Paths1593<T[K], Prev1593[D]>> : never }[keyof T]
  : never;

type Prev1593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1593 {
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

type ConfigPaths1593 = Paths1593<NestedConfig1593>;

interface HeavyProps1593 {
  config: DeepPartial1593<NestedConfig1593>;
  path?: ConfigPaths1593;
}

const HeavyComponent1593 = memo(function HeavyComponent1593({ config }: HeavyProps1593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1593.displayName = 'HeavyComponent1593';
export default HeavyComponent1593;

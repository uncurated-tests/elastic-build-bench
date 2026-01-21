'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1543<T> = T extends (infer U)[]
  ? DeepReadonlyArray1543<U>
  : T extends object
  ? DeepReadonlyObject1543<T>
  : T;

interface DeepReadonlyArray1543<T> extends ReadonlyArray<DeepReadonly1543<T>> {}

type DeepReadonlyObject1543<T> = {
  readonly [P in keyof T]: DeepReadonly1543<T[P]>;
};

type UnionToIntersection1543<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1543<T> = UnionToIntersection1543<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1543<T extends unknown[], V> = [...T, V];

type TuplifyUnion1543<T, L = LastOf1543<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1543<TuplifyUnion1543<Exclude<T, L>>, L>;

type DeepPartial1543<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1543<T[P]> }
  : T;

type Paths1543<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1543<K, Paths1543<T[K], Prev1543[D]>> : never }[keyof T]
  : never;

type Prev1543 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1543<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1543 {
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

type ConfigPaths1543 = Paths1543<NestedConfig1543>;

interface HeavyProps1543 {
  config: DeepPartial1543<NestedConfig1543>;
  path?: ConfigPaths1543;
}

const HeavyComponent1543 = memo(function HeavyComponent1543({ config }: HeavyProps1543) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1543) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1543 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1543: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1543.displayName = 'HeavyComponent1543';
export default HeavyComponent1543;

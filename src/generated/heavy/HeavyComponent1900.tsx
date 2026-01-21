'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1900<T> = T extends (infer U)[]
  ? DeepReadonlyArray1900<U>
  : T extends object
  ? DeepReadonlyObject1900<T>
  : T;

interface DeepReadonlyArray1900<T> extends ReadonlyArray<DeepReadonly1900<T>> {}

type DeepReadonlyObject1900<T> = {
  readonly [P in keyof T]: DeepReadonly1900<T[P]>;
};

type UnionToIntersection1900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1900<T> = UnionToIntersection1900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1900<T extends unknown[], V> = [...T, V];

type TuplifyUnion1900<T, L = LastOf1900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1900<TuplifyUnion1900<Exclude<T, L>>, L>;

type DeepPartial1900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1900<T[P]> }
  : T;

type Paths1900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1900<K, Paths1900<T[K], Prev1900[D]>> : never }[keyof T]
  : never;

type Prev1900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1900 {
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

type ConfigPaths1900 = Paths1900<NestedConfig1900>;

interface HeavyProps1900 {
  config: DeepPartial1900<NestedConfig1900>;
  path?: ConfigPaths1900;
}

const HeavyComponent1900 = memo(function HeavyComponent1900({ config }: HeavyProps1900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1900.displayName = 'HeavyComponent1900';
export default HeavyComponent1900;

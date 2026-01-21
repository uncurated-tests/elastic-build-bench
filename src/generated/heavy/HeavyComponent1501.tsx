'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1501<T> = T extends (infer U)[]
  ? DeepReadonlyArray1501<U>
  : T extends object
  ? DeepReadonlyObject1501<T>
  : T;

interface DeepReadonlyArray1501<T> extends ReadonlyArray<DeepReadonly1501<T>> {}

type DeepReadonlyObject1501<T> = {
  readonly [P in keyof T]: DeepReadonly1501<T[P]>;
};

type UnionToIntersection1501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1501<T> = UnionToIntersection1501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1501<T extends unknown[], V> = [...T, V];

type TuplifyUnion1501<T, L = LastOf1501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1501<TuplifyUnion1501<Exclude<T, L>>, L>;

type DeepPartial1501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1501<T[P]> }
  : T;

type Paths1501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1501<K, Paths1501<T[K], Prev1501[D]>> : never }[keyof T]
  : never;

type Prev1501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1501 {
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

type ConfigPaths1501 = Paths1501<NestedConfig1501>;

interface HeavyProps1501 {
  config: DeepPartial1501<NestedConfig1501>;
  path?: ConfigPaths1501;
}

const HeavyComponent1501 = memo(function HeavyComponent1501({ config }: HeavyProps1501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1501.displayName = 'HeavyComponent1501';
export default HeavyComponent1501;

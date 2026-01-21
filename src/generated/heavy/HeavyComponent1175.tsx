'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1175<T> = T extends (infer U)[]
  ? DeepReadonlyArray1175<U>
  : T extends object
  ? DeepReadonlyObject1175<T>
  : T;

interface DeepReadonlyArray1175<T> extends ReadonlyArray<DeepReadonly1175<T>> {}

type DeepReadonlyObject1175<T> = {
  readonly [P in keyof T]: DeepReadonly1175<T[P]>;
};

type UnionToIntersection1175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1175<T> = UnionToIntersection1175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1175<T extends unknown[], V> = [...T, V];

type TuplifyUnion1175<T, L = LastOf1175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1175<TuplifyUnion1175<Exclude<T, L>>, L>;

type DeepPartial1175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1175<T[P]> }
  : T;

type Paths1175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1175<K, Paths1175<T[K], Prev1175[D]>> : never }[keyof T]
  : never;

type Prev1175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1175 {
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

type ConfigPaths1175 = Paths1175<NestedConfig1175>;

interface HeavyProps1175 {
  config: DeepPartial1175<NestedConfig1175>;
  path?: ConfigPaths1175;
}

const HeavyComponent1175 = memo(function HeavyComponent1175({ config }: HeavyProps1175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1175.displayName = 'HeavyComponent1175';
export default HeavyComponent1175;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1866<T> = T extends (infer U)[]
  ? DeepReadonlyArray1866<U>
  : T extends object
  ? DeepReadonlyObject1866<T>
  : T;

interface DeepReadonlyArray1866<T> extends ReadonlyArray<DeepReadonly1866<T>> {}

type DeepReadonlyObject1866<T> = {
  readonly [P in keyof T]: DeepReadonly1866<T[P]>;
};

type UnionToIntersection1866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1866<T> = UnionToIntersection1866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1866<T extends unknown[], V> = [...T, V];

type TuplifyUnion1866<T, L = LastOf1866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1866<TuplifyUnion1866<Exclude<T, L>>, L>;

type DeepPartial1866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1866<T[P]> }
  : T;

type Paths1866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1866<K, Paths1866<T[K], Prev1866[D]>> : never }[keyof T]
  : never;

type Prev1866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1866 {
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

type ConfigPaths1866 = Paths1866<NestedConfig1866>;

interface HeavyProps1866 {
  config: DeepPartial1866<NestedConfig1866>;
  path?: ConfigPaths1866;
}

const HeavyComponent1866 = memo(function HeavyComponent1866({ config }: HeavyProps1866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1866.displayName = 'HeavyComponent1866';
export default HeavyComponent1866;

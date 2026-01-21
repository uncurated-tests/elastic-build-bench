'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1274<T> = T extends (infer U)[]
  ? DeepReadonlyArray1274<U>
  : T extends object
  ? DeepReadonlyObject1274<T>
  : T;

interface DeepReadonlyArray1274<T> extends ReadonlyArray<DeepReadonly1274<T>> {}

type DeepReadonlyObject1274<T> = {
  readonly [P in keyof T]: DeepReadonly1274<T[P]>;
};

type UnionToIntersection1274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1274<T> = UnionToIntersection1274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1274<T extends unknown[], V> = [...T, V];

type TuplifyUnion1274<T, L = LastOf1274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1274<TuplifyUnion1274<Exclude<T, L>>, L>;

type DeepPartial1274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1274<T[P]> }
  : T;

type Paths1274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1274<K, Paths1274<T[K], Prev1274[D]>> : never }[keyof T]
  : never;

type Prev1274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1274 {
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

type ConfigPaths1274 = Paths1274<NestedConfig1274>;

interface HeavyProps1274 {
  config: DeepPartial1274<NestedConfig1274>;
  path?: ConfigPaths1274;
}

const HeavyComponent1274 = memo(function HeavyComponent1274({ config }: HeavyProps1274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1274.displayName = 'HeavyComponent1274';
export default HeavyComponent1274;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1013<T> = T extends (infer U)[]
  ? DeepReadonlyArray1013<U>
  : T extends object
  ? DeepReadonlyObject1013<T>
  : T;

interface DeepReadonlyArray1013<T> extends ReadonlyArray<DeepReadonly1013<T>> {}

type DeepReadonlyObject1013<T> = {
  readonly [P in keyof T]: DeepReadonly1013<T[P]>;
};

type UnionToIntersection1013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1013<T> = UnionToIntersection1013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1013<T extends unknown[], V> = [...T, V];

type TuplifyUnion1013<T, L = LastOf1013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1013<TuplifyUnion1013<Exclude<T, L>>, L>;

type DeepPartial1013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1013<T[P]> }
  : T;

type Paths1013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1013<K, Paths1013<T[K], Prev1013[D]>> : never }[keyof T]
  : never;

type Prev1013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1013 {
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

type ConfigPaths1013 = Paths1013<NestedConfig1013>;

interface HeavyProps1013 {
  config: DeepPartial1013<NestedConfig1013>;
  path?: ConfigPaths1013;
}

const HeavyComponent1013 = memo(function HeavyComponent1013({ config }: HeavyProps1013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1013.displayName = 'HeavyComponent1013';
export default HeavyComponent1013;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2446<T> = T extends (infer U)[]
  ? DeepReadonlyArray2446<U>
  : T extends object
  ? DeepReadonlyObject2446<T>
  : T;

interface DeepReadonlyArray2446<T> extends ReadonlyArray<DeepReadonly2446<T>> {}

type DeepReadonlyObject2446<T> = {
  readonly [P in keyof T]: DeepReadonly2446<T[P]>;
};

type UnionToIntersection2446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2446<T> = UnionToIntersection2446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2446<T extends unknown[], V> = [...T, V];

type TuplifyUnion2446<T, L = LastOf2446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2446<TuplifyUnion2446<Exclude<T, L>>, L>;

type DeepPartial2446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2446<T[P]> }
  : T;

type Paths2446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2446<K, Paths2446<T[K], Prev2446[D]>> : never }[keyof T]
  : never;

type Prev2446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2446 {
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

type ConfigPaths2446 = Paths2446<NestedConfig2446>;

interface HeavyProps2446 {
  config: DeepPartial2446<NestedConfig2446>;
  path?: ConfigPaths2446;
}

const HeavyComponent2446 = memo(function HeavyComponent2446({ config }: HeavyProps2446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2446.displayName = 'HeavyComponent2446';
export default HeavyComponent2446;

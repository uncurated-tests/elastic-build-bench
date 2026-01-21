'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2581<T> = T extends (infer U)[]
  ? DeepReadonlyArray2581<U>
  : T extends object
  ? DeepReadonlyObject2581<T>
  : T;

interface DeepReadonlyArray2581<T> extends ReadonlyArray<DeepReadonly2581<T>> {}

type DeepReadonlyObject2581<T> = {
  readonly [P in keyof T]: DeepReadonly2581<T[P]>;
};

type UnionToIntersection2581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2581<T> = UnionToIntersection2581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2581<T extends unknown[], V> = [...T, V];

type TuplifyUnion2581<T, L = LastOf2581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2581<TuplifyUnion2581<Exclude<T, L>>, L>;

type DeepPartial2581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2581<T[P]> }
  : T;

type Paths2581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2581<K, Paths2581<T[K], Prev2581[D]>> : never }[keyof T]
  : never;

type Prev2581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2581 {
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

type ConfigPaths2581 = Paths2581<NestedConfig2581>;

interface HeavyProps2581 {
  config: DeepPartial2581<NestedConfig2581>;
  path?: ConfigPaths2581;
}

const HeavyComponent2581 = memo(function HeavyComponent2581({ config }: HeavyProps2581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2581.displayName = 'HeavyComponent2581';
export default HeavyComponent2581;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2428<T> = T extends (infer U)[]
  ? DeepReadonlyArray2428<U>
  : T extends object
  ? DeepReadonlyObject2428<T>
  : T;

interface DeepReadonlyArray2428<T> extends ReadonlyArray<DeepReadonly2428<T>> {}

type DeepReadonlyObject2428<T> = {
  readonly [P in keyof T]: DeepReadonly2428<T[P]>;
};

type UnionToIntersection2428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2428<T> = UnionToIntersection2428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2428<T extends unknown[], V> = [...T, V];

type TuplifyUnion2428<T, L = LastOf2428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2428<TuplifyUnion2428<Exclude<T, L>>, L>;

type DeepPartial2428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2428<T[P]> }
  : T;

type Paths2428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2428<K, Paths2428<T[K], Prev2428[D]>> : never }[keyof T]
  : never;

type Prev2428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2428 {
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

type ConfigPaths2428 = Paths2428<NestedConfig2428>;

interface HeavyProps2428 {
  config: DeepPartial2428<NestedConfig2428>;
  path?: ConfigPaths2428;
}

const HeavyComponent2428 = memo(function HeavyComponent2428({ config }: HeavyProps2428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2428.displayName = 'HeavyComponent2428';
export default HeavyComponent2428;

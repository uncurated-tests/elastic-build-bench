'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly341<T> = T extends (infer U)[]
  ? DeepReadonlyArray341<U>
  : T extends object
  ? DeepReadonlyObject341<T>
  : T;

interface DeepReadonlyArray341<T> extends ReadonlyArray<DeepReadonly341<T>> {}

type DeepReadonlyObject341<T> = {
  readonly [P in keyof T]: DeepReadonly341<T[P]>;
};

type UnionToIntersection341<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf341<T> = UnionToIntersection341<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push341<T extends unknown[], V> = [...T, V];

type TuplifyUnion341<T, L = LastOf341<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push341<TuplifyUnion341<Exclude<T, L>>, L>;

type DeepPartial341<T> = T extends object
  ? { [P in keyof T]?: DeepPartial341<T[P]> }
  : T;

type Paths341<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join341<K, Paths341<T[K], Prev341[D]>> : never }[keyof T]
  : never;

type Prev341 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join341<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig341 {
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

type ConfigPaths341 = Paths341<NestedConfig341>;

interface HeavyProps341 {
  config: DeepPartial341<NestedConfig341>;
  path?: ConfigPaths341;
}

const HeavyComponent341 = memo(function HeavyComponent341({ config }: HeavyProps341) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 341) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-341 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H341: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent341.displayName = 'HeavyComponent341';
export default HeavyComponent341;

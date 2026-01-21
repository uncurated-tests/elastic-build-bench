'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2357<T> = T extends (infer U)[]
  ? DeepReadonlyArray2357<U>
  : T extends object
  ? DeepReadonlyObject2357<T>
  : T;

interface DeepReadonlyArray2357<T> extends ReadonlyArray<DeepReadonly2357<T>> {}

type DeepReadonlyObject2357<T> = {
  readonly [P in keyof T]: DeepReadonly2357<T[P]>;
};

type UnionToIntersection2357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2357<T> = UnionToIntersection2357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2357<T extends unknown[], V> = [...T, V];

type TuplifyUnion2357<T, L = LastOf2357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2357<TuplifyUnion2357<Exclude<T, L>>, L>;

type DeepPartial2357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2357<T[P]> }
  : T;

type Paths2357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2357<K, Paths2357<T[K], Prev2357[D]>> : never }[keyof T]
  : never;

type Prev2357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2357 {
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

type ConfigPaths2357 = Paths2357<NestedConfig2357>;

interface HeavyProps2357 {
  config: DeepPartial2357<NestedConfig2357>;
  path?: ConfigPaths2357;
}

const HeavyComponent2357 = memo(function HeavyComponent2357({ config }: HeavyProps2357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2357.displayName = 'HeavyComponent2357';
export default HeavyComponent2357;

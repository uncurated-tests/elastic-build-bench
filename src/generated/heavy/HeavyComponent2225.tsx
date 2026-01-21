'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2225<T> = T extends (infer U)[]
  ? DeepReadonlyArray2225<U>
  : T extends object
  ? DeepReadonlyObject2225<T>
  : T;

interface DeepReadonlyArray2225<T> extends ReadonlyArray<DeepReadonly2225<T>> {}

type DeepReadonlyObject2225<T> = {
  readonly [P in keyof T]: DeepReadonly2225<T[P]>;
};

type UnionToIntersection2225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2225<T> = UnionToIntersection2225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2225<T extends unknown[], V> = [...T, V];

type TuplifyUnion2225<T, L = LastOf2225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2225<TuplifyUnion2225<Exclude<T, L>>, L>;

type DeepPartial2225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2225<T[P]> }
  : T;

type Paths2225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2225<K, Paths2225<T[K], Prev2225[D]>> : never }[keyof T]
  : never;

type Prev2225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2225 {
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

type ConfigPaths2225 = Paths2225<NestedConfig2225>;

interface HeavyProps2225 {
  config: DeepPartial2225<NestedConfig2225>;
  path?: ConfigPaths2225;
}

const HeavyComponent2225 = memo(function HeavyComponent2225({ config }: HeavyProps2225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2225.displayName = 'HeavyComponent2225';
export default HeavyComponent2225;

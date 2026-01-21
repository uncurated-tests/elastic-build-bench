'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2293<T> = T extends (infer U)[]
  ? DeepReadonlyArray2293<U>
  : T extends object
  ? DeepReadonlyObject2293<T>
  : T;

interface DeepReadonlyArray2293<T> extends ReadonlyArray<DeepReadonly2293<T>> {}

type DeepReadonlyObject2293<T> = {
  readonly [P in keyof T]: DeepReadonly2293<T[P]>;
};

type UnionToIntersection2293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2293<T> = UnionToIntersection2293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2293<T extends unknown[], V> = [...T, V];

type TuplifyUnion2293<T, L = LastOf2293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2293<TuplifyUnion2293<Exclude<T, L>>, L>;

type DeepPartial2293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2293<T[P]> }
  : T;

type Paths2293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2293<K, Paths2293<T[K], Prev2293[D]>> : never }[keyof T]
  : never;

type Prev2293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2293 {
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

type ConfigPaths2293 = Paths2293<NestedConfig2293>;

interface HeavyProps2293 {
  config: DeepPartial2293<NestedConfig2293>;
  path?: ConfigPaths2293;
}

const HeavyComponent2293 = memo(function HeavyComponent2293({ config }: HeavyProps2293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2293.displayName = 'HeavyComponent2293';
export default HeavyComponent2293;

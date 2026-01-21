'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2988<T> = T extends (infer U)[]
  ? DeepReadonlyArray2988<U>
  : T extends object
  ? DeepReadonlyObject2988<T>
  : T;

interface DeepReadonlyArray2988<T> extends ReadonlyArray<DeepReadonly2988<T>> {}

type DeepReadonlyObject2988<T> = {
  readonly [P in keyof T]: DeepReadonly2988<T[P]>;
};

type UnionToIntersection2988<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2988<T> = UnionToIntersection2988<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2988<T extends unknown[], V> = [...T, V];

type TuplifyUnion2988<T, L = LastOf2988<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2988<TuplifyUnion2988<Exclude<T, L>>, L>;

type DeepPartial2988<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2988<T[P]> }
  : T;

type Paths2988<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2988<K, Paths2988<T[K], Prev2988[D]>> : never }[keyof T]
  : never;

type Prev2988 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2988<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2988 {
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

type ConfigPaths2988 = Paths2988<NestedConfig2988>;

interface HeavyProps2988 {
  config: DeepPartial2988<NestedConfig2988>;
  path?: ConfigPaths2988;
}

const HeavyComponent2988 = memo(function HeavyComponent2988({ config }: HeavyProps2988) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2988) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2988 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2988: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2988.displayName = 'HeavyComponent2988';
export default HeavyComponent2988;

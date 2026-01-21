'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2514<T> = T extends (infer U)[]
  ? DeepReadonlyArray2514<U>
  : T extends object
  ? DeepReadonlyObject2514<T>
  : T;

interface DeepReadonlyArray2514<T> extends ReadonlyArray<DeepReadonly2514<T>> {}

type DeepReadonlyObject2514<T> = {
  readonly [P in keyof T]: DeepReadonly2514<T[P]>;
};

type UnionToIntersection2514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2514<T> = UnionToIntersection2514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2514<T extends unknown[], V> = [...T, V];

type TuplifyUnion2514<T, L = LastOf2514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2514<TuplifyUnion2514<Exclude<T, L>>, L>;

type DeepPartial2514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2514<T[P]> }
  : T;

type Paths2514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2514<K, Paths2514<T[K], Prev2514[D]>> : never }[keyof T]
  : never;

type Prev2514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2514 {
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

type ConfigPaths2514 = Paths2514<NestedConfig2514>;

interface HeavyProps2514 {
  config: DeepPartial2514<NestedConfig2514>;
  path?: ConfigPaths2514;
}

const HeavyComponent2514 = memo(function HeavyComponent2514({ config }: HeavyProps2514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2514.displayName = 'HeavyComponent2514';
export default HeavyComponent2514;

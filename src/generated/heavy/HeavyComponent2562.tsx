'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2562<T> = T extends (infer U)[]
  ? DeepReadonlyArray2562<U>
  : T extends object
  ? DeepReadonlyObject2562<T>
  : T;

interface DeepReadonlyArray2562<T> extends ReadonlyArray<DeepReadonly2562<T>> {}

type DeepReadonlyObject2562<T> = {
  readonly [P in keyof T]: DeepReadonly2562<T[P]>;
};

type UnionToIntersection2562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2562<T> = UnionToIntersection2562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2562<T extends unknown[], V> = [...T, V];

type TuplifyUnion2562<T, L = LastOf2562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2562<TuplifyUnion2562<Exclude<T, L>>, L>;

type DeepPartial2562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2562<T[P]> }
  : T;

type Paths2562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2562<K, Paths2562<T[K], Prev2562[D]>> : never }[keyof T]
  : never;

type Prev2562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2562 {
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

type ConfigPaths2562 = Paths2562<NestedConfig2562>;

interface HeavyProps2562 {
  config: DeepPartial2562<NestedConfig2562>;
  path?: ConfigPaths2562;
}

const HeavyComponent2562 = memo(function HeavyComponent2562({ config }: HeavyProps2562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2562.displayName = 'HeavyComponent2562';
export default HeavyComponent2562;

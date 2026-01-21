'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2404<T> = T extends (infer U)[]
  ? DeepReadonlyArray2404<U>
  : T extends object
  ? DeepReadonlyObject2404<T>
  : T;

interface DeepReadonlyArray2404<T> extends ReadonlyArray<DeepReadonly2404<T>> {}

type DeepReadonlyObject2404<T> = {
  readonly [P in keyof T]: DeepReadonly2404<T[P]>;
};

type UnionToIntersection2404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2404<T> = UnionToIntersection2404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2404<T extends unknown[], V> = [...T, V];

type TuplifyUnion2404<T, L = LastOf2404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2404<TuplifyUnion2404<Exclude<T, L>>, L>;

type DeepPartial2404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2404<T[P]> }
  : T;

type Paths2404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2404<K, Paths2404<T[K], Prev2404[D]>> : never }[keyof T]
  : never;

type Prev2404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2404 {
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

type ConfigPaths2404 = Paths2404<NestedConfig2404>;

interface HeavyProps2404 {
  config: DeepPartial2404<NestedConfig2404>;
  path?: ConfigPaths2404;
}

const HeavyComponent2404 = memo(function HeavyComponent2404({ config }: HeavyProps2404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2404.displayName = 'HeavyComponent2404';
export default HeavyComponent2404;

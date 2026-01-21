'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2998<T> = T extends (infer U)[]
  ? DeepReadonlyArray2998<U>
  : T extends object
  ? DeepReadonlyObject2998<T>
  : T;

interface DeepReadonlyArray2998<T> extends ReadonlyArray<DeepReadonly2998<T>> {}

type DeepReadonlyObject2998<T> = {
  readonly [P in keyof T]: DeepReadonly2998<T[P]>;
};

type UnionToIntersection2998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2998<T> = UnionToIntersection2998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2998<T extends unknown[], V> = [...T, V];

type TuplifyUnion2998<T, L = LastOf2998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2998<TuplifyUnion2998<Exclude<T, L>>, L>;

type DeepPartial2998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2998<T[P]> }
  : T;

type Paths2998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2998<K, Paths2998<T[K], Prev2998[D]>> : never }[keyof T]
  : never;

type Prev2998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2998 {
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

type ConfigPaths2998 = Paths2998<NestedConfig2998>;

interface HeavyProps2998 {
  config: DeepPartial2998<NestedConfig2998>;
  path?: ConfigPaths2998;
}

const HeavyComponent2998 = memo(function HeavyComponent2998({ config }: HeavyProps2998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2998.displayName = 'HeavyComponent2998';
export default HeavyComponent2998;

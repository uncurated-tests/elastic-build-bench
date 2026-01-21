'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2013<T> = T extends (infer U)[]
  ? DeepReadonlyArray2013<U>
  : T extends object
  ? DeepReadonlyObject2013<T>
  : T;

interface DeepReadonlyArray2013<T> extends ReadonlyArray<DeepReadonly2013<T>> {}

type DeepReadonlyObject2013<T> = {
  readonly [P in keyof T]: DeepReadonly2013<T[P]>;
};

type UnionToIntersection2013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2013<T> = UnionToIntersection2013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2013<T extends unknown[], V> = [...T, V];

type TuplifyUnion2013<T, L = LastOf2013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2013<TuplifyUnion2013<Exclude<T, L>>, L>;

type DeepPartial2013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2013<T[P]> }
  : T;

type Paths2013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2013<K, Paths2013<T[K], Prev2013[D]>> : never }[keyof T]
  : never;

type Prev2013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2013 {
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

type ConfigPaths2013 = Paths2013<NestedConfig2013>;

interface HeavyProps2013 {
  config: DeepPartial2013<NestedConfig2013>;
  path?: ConfigPaths2013;
}

const HeavyComponent2013 = memo(function HeavyComponent2013({ config }: HeavyProps2013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2013.displayName = 'HeavyComponent2013';
export default HeavyComponent2013;

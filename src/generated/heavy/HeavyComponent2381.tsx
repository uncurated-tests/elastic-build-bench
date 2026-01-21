'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2381<T> = T extends (infer U)[]
  ? DeepReadonlyArray2381<U>
  : T extends object
  ? DeepReadonlyObject2381<T>
  : T;

interface DeepReadonlyArray2381<T> extends ReadonlyArray<DeepReadonly2381<T>> {}

type DeepReadonlyObject2381<T> = {
  readonly [P in keyof T]: DeepReadonly2381<T[P]>;
};

type UnionToIntersection2381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2381<T> = UnionToIntersection2381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2381<T extends unknown[], V> = [...T, V];

type TuplifyUnion2381<T, L = LastOf2381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2381<TuplifyUnion2381<Exclude<T, L>>, L>;

type DeepPartial2381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2381<T[P]> }
  : T;

type Paths2381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2381<K, Paths2381<T[K], Prev2381[D]>> : never }[keyof T]
  : never;

type Prev2381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2381 {
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

type ConfigPaths2381 = Paths2381<NestedConfig2381>;

interface HeavyProps2381 {
  config: DeepPartial2381<NestedConfig2381>;
  path?: ConfigPaths2381;
}

const HeavyComponent2381 = memo(function HeavyComponent2381({ config }: HeavyProps2381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2381.displayName = 'HeavyComponent2381';
export default HeavyComponent2381;

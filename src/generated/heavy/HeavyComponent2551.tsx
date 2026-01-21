'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2551<T> = T extends (infer U)[]
  ? DeepReadonlyArray2551<U>
  : T extends object
  ? DeepReadonlyObject2551<T>
  : T;

interface DeepReadonlyArray2551<T> extends ReadonlyArray<DeepReadonly2551<T>> {}

type DeepReadonlyObject2551<T> = {
  readonly [P in keyof T]: DeepReadonly2551<T[P]>;
};

type UnionToIntersection2551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2551<T> = UnionToIntersection2551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2551<T extends unknown[], V> = [...T, V];

type TuplifyUnion2551<T, L = LastOf2551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2551<TuplifyUnion2551<Exclude<T, L>>, L>;

type DeepPartial2551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2551<T[P]> }
  : T;

type Paths2551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2551<K, Paths2551<T[K], Prev2551[D]>> : never }[keyof T]
  : never;

type Prev2551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2551 {
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

type ConfigPaths2551 = Paths2551<NestedConfig2551>;

interface HeavyProps2551 {
  config: DeepPartial2551<NestedConfig2551>;
  path?: ConfigPaths2551;
}

const HeavyComponent2551 = memo(function HeavyComponent2551({ config }: HeavyProps2551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2551.displayName = 'HeavyComponent2551';
export default HeavyComponent2551;

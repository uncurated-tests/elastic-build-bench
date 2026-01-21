'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2503<T> = T extends (infer U)[]
  ? DeepReadonlyArray2503<U>
  : T extends object
  ? DeepReadonlyObject2503<T>
  : T;

interface DeepReadonlyArray2503<T> extends ReadonlyArray<DeepReadonly2503<T>> {}

type DeepReadonlyObject2503<T> = {
  readonly [P in keyof T]: DeepReadonly2503<T[P]>;
};

type UnionToIntersection2503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2503<T> = UnionToIntersection2503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2503<T extends unknown[], V> = [...T, V];

type TuplifyUnion2503<T, L = LastOf2503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2503<TuplifyUnion2503<Exclude<T, L>>, L>;

type DeepPartial2503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2503<T[P]> }
  : T;

type Paths2503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2503<K, Paths2503<T[K], Prev2503[D]>> : never }[keyof T]
  : never;

type Prev2503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2503 {
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

type ConfigPaths2503 = Paths2503<NestedConfig2503>;

interface HeavyProps2503 {
  config: DeepPartial2503<NestedConfig2503>;
  path?: ConfigPaths2503;
}

const HeavyComponent2503 = memo(function HeavyComponent2503({ config }: HeavyProps2503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2503.displayName = 'HeavyComponent2503';
export default HeavyComponent2503;

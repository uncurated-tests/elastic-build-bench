'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2196<T> = T extends (infer U)[]
  ? DeepReadonlyArray2196<U>
  : T extends object
  ? DeepReadonlyObject2196<T>
  : T;

interface DeepReadonlyArray2196<T> extends ReadonlyArray<DeepReadonly2196<T>> {}

type DeepReadonlyObject2196<T> = {
  readonly [P in keyof T]: DeepReadonly2196<T[P]>;
};

type UnionToIntersection2196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2196<T> = UnionToIntersection2196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2196<T extends unknown[], V> = [...T, V];

type TuplifyUnion2196<T, L = LastOf2196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2196<TuplifyUnion2196<Exclude<T, L>>, L>;

type DeepPartial2196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2196<T[P]> }
  : T;

type Paths2196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2196<K, Paths2196<T[K], Prev2196[D]>> : never }[keyof T]
  : never;

type Prev2196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2196 {
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

type ConfigPaths2196 = Paths2196<NestedConfig2196>;

interface HeavyProps2196 {
  config: DeepPartial2196<NestedConfig2196>;
  path?: ConfigPaths2196;
}

const HeavyComponent2196 = memo(function HeavyComponent2196({ config }: HeavyProps2196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2196.displayName = 'HeavyComponent2196';
export default HeavyComponent2196;

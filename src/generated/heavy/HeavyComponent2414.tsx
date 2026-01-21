'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2414<T> = T extends (infer U)[]
  ? DeepReadonlyArray2414<U>
  : T extends object
  ? DeepReadonlyObject2414<T>
  : T;

interface DeepReadonlyArray2414<T> extends ReadonlyArray<DeepReadonly2414<T>> {}

type DeepReadonlyObject2414<T> = {
  readonly [P in keyof T]: DeepReadonly2414<T[P]>;
};

type UnionToIntersection2414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2414<T> = UnionToIntersection2414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2414<T extends unknown[], V> = [...T, V];

type TuplifyUnion2414<T, L = LastOf2414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2414<TuplifyUnion2414<Exclude<T, L>>, L>;

type DeepPartial2414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2414<T[P]> }
  : T;

type Paths2414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2414<K, Paths2414<T[K], Prev2414[D]>> : never }[keyof T]
  : never;

type Prev2414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2414 {
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

type ConfigPaths2414 = Paths2414<NestedConfig2414>;

interface HeavyProps2414 {
  config: DeepPartial2414<NestedConfig2414>;
  path?: ConfigPaths2414;
}

const HeavyComponent2414 = memo(function HeavyComponent2414({ config }: HeavyProps2414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2414.displayName = 'HeavyComponent2414';
export default HeavyComponent2414;

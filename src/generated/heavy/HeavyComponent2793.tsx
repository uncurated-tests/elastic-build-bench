'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2793<T> = T extends (infer U)[]
  ? DeepReadonlyArray2793<U>
  : T extends object
  ? DeepReadonlyObject2793<T>
  : T;

interface DeepReadonlyArray2793<T> extends ReadonlyArray<DeepReadonly2793<T>> {}

type DeepReadonlyObject2793<T> = {
  readonly [P in keyof T]: DeepReadonly2793<T[P]>;
};

type UnionToIntersection2793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2793<T> = UnionToIntersection2793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2793<T extends unknown[], V> = [...T, V];

type TuplifyUnion2793<T, L = LastOf2793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2793<TuplifyUnion2793<Exclude<T, L>>, L>;

type DeepPartial2793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2793<T[P]> }
  : T;

type Paths2793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2793<K, Paths2793<T[K], Prev2793[D]>> : never }[keyof T]
  : never;

type Prev2793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2793 {
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

type ConfigPaths2793 = Paths2793<NestedConfig2793>;

interface HeavyProps2793 {
  config: DeepPartial2793<NestedConfig2793>;
  path?: ConfigPaths2793;
}

const HeavyComponent2793 = memo(function HeavyComponent2793({ config }: HeavyProps2793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2793.displayName = 'HeavyComponent2793';
export default HeavyComponent2793;

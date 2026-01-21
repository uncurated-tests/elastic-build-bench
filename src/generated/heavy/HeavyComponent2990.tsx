'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2990<T> = T extends (infer U)[]
  ? DeepReadonlyArray2990<U>
  : T extends object
  ? DeepReadonlyObject2990<T>
  : T;

interface DeepReadonlyArray2990<T> extends ReadonlyArray<DeepReadonly2990<T>> {}

type DeepReadonlyObject2990<T> = {
  readonly [P in keyof T]: DeepReadonly2990<T[P]>;
};

type UnionToIntersection2990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2990<T> = UnionToIntersection2990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2990<T extends unknown[], V> = [...T, V];

type TuplifyUnion2990<T, L = LastOf2990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2990<TuplifyUnion2990<Exclude<T, L>>, L>;

type DeepPartial2990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2990<T[P]> }
  : T;

type Paths2990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2990<K, Paths2990<T[K], Prev2990[D]>> : never }[keyof T]
  : never;

type Prev2990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2990 {
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

type ConfigPaths2990 = Paths2990<NestedConfig2990>;

interface HeavyProps2990 {
  config: DeepPartial2990<NestedConfig2990>;
  path?: ConfigPaths2990;
}

const HeavyComponent2990 = memo(function HeavyComponent2990({ config }: HeavyProps2990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2990.displayName = 'HeavyComponent2990';
export default HeavyComponent2990;

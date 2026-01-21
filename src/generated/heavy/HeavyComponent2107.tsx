'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2107<T> = T extends (infer U)[]
  ? DeepReadonlyArray2107<U>
  : T extends object
  ? DeepReadonlyObject2107<T>
  : T;

interface DeepReadonlyArray2107<T> extends ReadonlyArray<DeepReadonly2107<T>> {}

type DeepReadonlyObject2107<T> = {
  readonly [P in keyof T]: DeepReadonly2107<T[P]>;
};

type UnionToIntersection2107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2107<T> = UnionToIntersection2107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2107<T extends unknown[], V> = [...T, V];

type TuplifyUnion2107<T, L = LastOf2107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2107<TuplifyUnion2107<Exclude<T, L>>, L>;

type DeepPartial2107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2107<T[P]> }
  : T;

type Paths2107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2107<K, Paths2107<T[K], Prev2107[D]>> : never }[keyof T]
  : never;

type Prev2107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2107 {
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

type ConfigPaths2107 = Paths2107<NestedConfig2107>;

interface HeavyProps2107 {
  config: DeepPartial2107<NestedConfig2107>;
  path?: ConfigPaths2107;
}

const HeavyComponent2107 = memo(function HeavyComponent2107({ config }: HeavyProps2107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2107.displayName = 'HeavyComponent2107';
export default HeavyComponent2107;

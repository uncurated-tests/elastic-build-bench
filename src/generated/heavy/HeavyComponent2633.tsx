'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2633<T> = T extends (infer U)[]
  ? DeepReadonlyArray2633<U>
  : T extends object
  ? DeepReadonlyObject2633<T>
  : T;

interface DeepReadonlyArray2633<T> extends ReadonlyArray<DeepReadonly2633<T>> {}

type DeepReadonlyObject2633<T> = {
  readonly [P in keyof T]: DeepReadonly2633<T[P]>;
};

type UnionToIntersection2633<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2633<T> = UnionToIntersection2633<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2633<T extends unknown[], V> = [...T, V];

type TuplifyUnion2633<T, L = LastOf2633<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2633<TuplifyUnion2633<Exclude<T, L>>, L>;

type DeepPartial2633<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2633<T[P]> }
  : T;

type Paths2633<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2633<K, Paths2633<T[K], Prev2633[D]>> : never }[keyof T]
  : never;

type Prev2633 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2633<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2633 {
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

type ConfigPaths2633 = Paths2633<NestedConfig2633>;

interface HeavyProps2633 {
  config: DeepPartial2633<NestedConfig2633>;
  path?: ConfigPaths2633;
}

const HeavyComponent2633 = memo(function HeavyComponent2633({ config }: HeavyProps2633) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2633) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2633 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2633: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2633.displayName = 'HeavyComponent2633';
export default HeavyComponent2633;

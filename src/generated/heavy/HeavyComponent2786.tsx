'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2786<T> = T extends (infer U)[]
  ? DeepReadonlyArray2786<U>
  : T extends object
  ? DeepReadonlyObject2786<T>
  : T;

interface DeepReadonlyArray2786<T> extends ReadonlyArray<DeepReadonly2786<T>> {}

type DeepReadonlyObject2786<T> = {
  readonly [P in keyof T]: DeepReadonly2786<T[P]>;
};

type UnionToIntersection2786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2786<T> = UnionToIntersection2786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2786<T extends unknown[], V> = [...T, V];

type TuplifyUnion2786<T, L = LastOf2786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2786<TuplifyUnion2786<Exclude<T, L>>, L>;

type DeepPartial2786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2786<T[P]> }
  : T;

type Paths2786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2786<K, Paths2786<T[K], Prev2786[D]>> : never }[keyof T]
  : never;

type Prev2786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2786 {
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

type ConfigPaths2786 = Paths2786<NestedConfig2786>;

interface HeavyProps2786 {
  config: DeepPartial2786<NestedConfig2786>;
  path?: ConfigPaths2786;
}

const HeavyComponent2786 = memo(function HeavyComponent2786({ config }: HeavyProps2786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2786.displayName = 'HeavyComponent2786';
export default HeavyComponent2786;

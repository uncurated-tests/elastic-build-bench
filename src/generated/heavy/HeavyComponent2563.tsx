'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2563<T> = T extends (infer U)[]
  ? DeepReadonlyArray2563<U>
  : T extends object
  ? DeepReadonlyObject2563<T>
  : T;

interface DeepReadonlyArray2563<T> extends ReadonlyArray<DeepReadonly2563<T>> {}

type DeepReadonlyObject2563<T> = {
  readonly [P in keyof T]: DeepReadonly2563<T[P]>;
};

type UnionToIntersection2563<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2563<T> = UnionToIntersection2563<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2563<T extends unknown[], V> = [...T, V];

type TuplifyUnion2563<T, L = LastOf2563<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2563<TuplifyUnion2563<Exclude<T, L>>, L>;

type DeepPartial2563<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2563<T[P]> }
  : T;

type Paths2563<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2563<K, Paths2563<T[K], Prev2563[D]>> : never }[keyof T]
  : never;

type Prev2563 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2563<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2563 {
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

type ConfigPaths2563 = Paths2563<NestedConfig2563>;

interface HeavyProps2563 {
  config: DeepPartial2563<NestedConfig2563>;
  path?: ConfigPaths2563;
}

const HeavyComponent2563 = memo(function HeavyComponent2563({ config }: HeavyProps2563) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2563) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2563 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2563: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2563.displayName = 'HeavyComponent2563';
export default HeavyComponent2563;

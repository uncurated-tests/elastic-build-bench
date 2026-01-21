'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2241<T> = T extends (infer U)[]
  ? DeepReadonlyArray2241<U>
  : T extends object
  ? DeepReadonlyObject2241<T>
  : T;

interface DeepReadonlyArray2241<T> extends ReadonlyArray<DeepReadonly2241<T>> {}

type DeepReadonlyObject2241<T> = {
  readonly [P in keyof T]: DeepReadonly2241<T[P]>;
};

type UnionToIntersection2241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2241<T> = UnionToIntersection2241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2241<T extends unknown[], V> = [...T, V];

type TuplifyUnion2241<T, L = LastOf2241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2241<TuplifyUnion2241<Exclude<T, L>>, L>;

type DeepPartial2241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2241<T[P]> }
  : T;

type Paths2241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2241<K, Paths2241<T[K], Prev2241[D]>> : never }[keyof T]
  : never;

type Prev2241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2241 {
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

type ConfigPaths2241 = Paths2241<NestedConfig2241>;

interface HeavyProps2241 {
  config: DeepPartial2241<NestedConfig2241>;
  path?: ConfigPaths2241;
}

const HeavyComponent2241 = memo(function HeavyComponent2241({ config }: HeavyProps2241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2241.displayName = 'HeavyComponent2241';
export default HeavyComponent2241;

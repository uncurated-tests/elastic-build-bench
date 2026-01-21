'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2123<T> = T extends (infer U)[]
  ? DeepReadonlyArray2123<U>
  : T extends object
  ? DeepReadonlyObject2123<T>
  : T;

interface DeepReadonlyArray2123<T> extends ReadonlyArray<DeepReadonly2123<T>> {}

type DeepReadonlyObject2123<T> = {
  readonly [P in keyof T]: DeepReadonly2123<T[P]>;
};

type UnionToIntersection2123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2123<T> = UnionToIntersection2123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2123<T extends unknown[], V> = [...T, V];

type TuplifyUnion2123<T, L = LastOf2123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2123<TuplifyUnion2123<Exclude<T, L>>, L>;

type DeepPartial2123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2123<T[P]> }
  : T;

type Paths2123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2123<K, Paths2123<T[K], Prev2123[D]>> : never }[keyof T]
  : never;

type Prev2123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2123 {
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

type ConfigPaths2123 = Paths2123<NestedConfig2123>;

interface HeavyProps2123 {
  config: DeepPartial2123<NestedConfig2123>;
  path?: ConfigPaths2123;
}

const HeavyComponent2123 = memo(function HeavyComponent2123({ config }: HeavyProps2123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2123.displayName = 'HeavyComponent2123';
export default HeavyComponent2123;

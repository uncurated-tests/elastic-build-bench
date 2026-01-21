'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2797<T> = T extends (infer U)[]
  ? DeepReadonlyArray2797<U>
  : T extends object
  ? DeepReadonlyObject2797<T>
  : T;

interface DeepReadonlyArray2797<T> extends ReadonlyArray<DeepReadonly2797<T>> {}

type DeepReadonlyObject2797<T> = {
  readonly [P in keyof T]: DeepReadonly2797<T[P]>;
};

type UnionToIntersection2797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2797<T> = UnionToIntersection2797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2797<T extends unknown[], V> = [...T, V];

type TuplifyUnion2797<T, L = LastOf2797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2797<TuplifyUnion2797<Exclude<T, L>>, L>;

type DeepPartial2797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2797<T[P]> }
  : T;

type Paths2797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2797<K, Paths2797<T[K], Prev2797[D]>> : never }[keyof T]
  : never;

type Prev2797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2797 {
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

type ConfigPaths2797 = Paths2797<NestedConfig2797>;

interface HeavyProps2797 {
  config: DeepPartial2797<NestedConfig2797>;
  path?: ConfigPaths2797;
}

const HeavyComponent2797 = memo(function HeavyComponent2797({ config }: HeavyProps2797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2797.displayName = 'HeavyComponent2797';
export default HeavyComponent2797;

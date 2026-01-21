'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2894<T> = T extends (infer U)[]
  ? DeepReadonlyArray2894<U>
  : T extends object
  ? DeepReadonlyObject2894<T>
  : T;

interface DeepReadonlyArray2894<T> extends ReadonlyArray<DeepReadonly2894<T>> {}

type DeepReadonlyObject2894<T> = {
  readonly [P in keyof T]: DeepReadonly2894<T[P]>;
};

type UnionToIntersection2894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2894<T> = UnionToIntersection2894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2894<T extends unknown[], V> = [...T, V];

type TuplifyUnion2894<T, L = LastOf2894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2894<TuplifyUnion2894<Exclude<T, L>>, L>;

type DeepPartial2894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2894<T[P]> }
  : T;

type Paths2894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2894<K, Paths2894<T[K], Prev2894[D]>> : never }[keyof T]
  : never;

type Prev2894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2894 {
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

type ConfigPaths2894 = Paths2894<NestedConfig2894>;

interface HeavyProps2894 {
  config: DeepPartial2894<NestedConfig2894>;
  path?: ConfigPaths2894;
}

const HeavyComponent2894 = memo(function HeavyComponent2894({ config }: HeavyProps2894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2894.displayName = 'HeavyComponent2894';
export default HeavyComponent2894;

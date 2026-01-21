'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2661<T> = T extends (infer U)[]
  ? DeepReadonlyArray2661<U>
  : T extends object
  ? DeepReadonlyObject2661<T>
  : T;

interface DeepReadonlyArray2661<T> extends ReadonlyArray<DeepReadonly2661<T>> {}

type DeepReadonlyObject2661<T> = {
  readonly [P in keyof T]: DeepReadonly2661<T[P]>;
};

type UnionToIntersection2661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2661<T> = UnionToIntersection2661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2661<T extends unknown[], V> = [...T, V];

type TuplifyUnion2661<T, L = LastOf2661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2661<TuplifyUnion2661<Exclude<T, L>>, L>;

type DeepPartial2661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2661<T[P]> }
  : T;

type Paths2661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2661<K, Paths2661<T[K], Prev2661[D]>> : never }[keyof T]
  : never;

type Prev2661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2661 {
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

type ConfigPaths2661 = Paths2661<NestedConfig2661>;

interface HeavyProps2661 {
  config: DeepPartial2661<NestedConfig2661>;
  path?: ConfigPaths2661;
}

const HeavyComponent2661 = memo(function HeavyComponent2661({ config }: HeavyProps2661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2661.displayName = 'HeavyComponent2661';
export default HeavyComponent2661;

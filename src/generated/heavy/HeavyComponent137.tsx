'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly137<T> = T extends (infer U)[]
  ? DeepReadonlyArray137<U>
  : T extends object
  ? DeepReadonlyObject137<T>
  : T;

interface DeepReadonlyArray137<T> extends ReadonlyArray<DeepReadonly137<T>> {}

type DeepReadonlyObject137<T> = {
  readonly [P in keyof T]: DeepReadonly137<T[P]>;
};

type UnionToIntersection137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf137<T> = UnionToIntersection137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push137<T extends unknown[], V> = [...T, V];

type TuplifyUnion137<T, L = LastOf137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push137<TuplifyUnion137<Exclude<T, L>>, L>;

type DeepPartial137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial137<T[P]> }
  : T;

type Paths137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join137<K, Paths137<T[K], Prev137[D]>> : never }[keyof T]
  : never;

type Prev137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig137 {
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

type ConfigPaths137 = Paths137<NestedConfig137>;

interface HeavyProps137 {
  config: DeepPartial137<NestedConfig137>;
  path?: ConfigPaths137;
}

const HeavyComponent137 = memo(function HeavyComponent137({ config }: HeavyProps137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent137.displayName = 'HeavyComponent137';
export default HeavyComponent137;

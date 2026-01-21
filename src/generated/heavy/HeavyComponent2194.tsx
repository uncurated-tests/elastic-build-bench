'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2194<T> = T extends (infer U)[]
  ? DeepReadonlyArray2194<U>
  : T extends object
  ? DeepReadonlyObject2194<T>
  : T;

interface DeepReadonlyArray2194<T> extends ReadonlyArray<DeepReadonly2194<T>> {}

type DeepReadonlyObject2194<T> = {
  readonly [P in keyof T]: DeepReadonly2194<T[P]>;
};

type UnionToIntersection2194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2194<T> = UnionToIntersection2194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2194<T extends unknown[], V> = [...T, V];

type TuplifyUnion2194<T, L = LastOf2194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2194<TuplifyUnion2194<Exclude<T, L>>, L>;

type DeepPartial2194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2194<T[P]> }
  : T;

type Paths2194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2194<K, Paths2194<T[K], Prev2194[D]>> : never }[keyof T]
  : never;

type Prev2194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2194 {
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

type ConfigPaths2194 = Paths2194<NestedConfig2194>;

interface HeavyProps2194 {
  config: DeepPartial2194<NestedConfig2194>;
  path?: ConfigPaths2194;
}

const HeavyComponent2194 = memo(function HeavyComponent2194({ config }: HeavyProps2194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2194.displayName = 'HeavyComponent2194';
export default HeavyComponent2194;

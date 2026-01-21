'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2294<T> = T extends (infer U)[]
  ? DeepReadonlyArray2294<U>
  : T extends object
  ? DeepReadonlyObject2294<T>
  : T;

interface DeepReadonlyArray2294<T> extends ReadonlyArray<DeepReadonly2294<T>> {}

type DeepReadonlyObject2294<T> = {
  readonly [P in keyof T]: DeepReadonly2294<T[P]>;
};

type UnionToIntersection2294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2294<T> = UnionToIntersection2294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2294<T extends unknown[], V> = [...T, V];

type TuplifyUnion2294<T, L = LastOf2294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2294<TuplifyUnion2294<Exclude<T, L>>, L>;

type DeepPartial2294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2294<T[P]> }
  : T;

type Paths2294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2294<K, Paths2294<T[K], Prev2294[D]>> : never }[keyof T]
  : never;

type Prev2294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2294 {
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

type ConfigPaths2294 = Paths2294<NestedConfig2294>;

interface HeavyProps2294 {
  config: DeepPartial2294<NestedConfig2294>;
  path?: ConfigPaths2294;
}

const HeavyComponent2294 = memo(function HeavyComponent2294({ config }: HeavyProps2294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2294.displayName = 'HeavyComponent2294';
export default HeavyComponent2294;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2297<T> = T extends (infer U)[]
  ? DeepReadonlyArray2297<U>
  : T extends object
  ? DeepReadonlyObject2297<T>
  : T;

interface DeepReadonlyArray2297<T> extends ReadonlyArray<DeepReadonly2297<T>> {}

type DeepReadonlyObject2297<T> = {
  readonly [P in keyof T]: DeepReadonly2297<T[P]>;
};

type UnionToIntersection2297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2297<T> = UnionToIntersection2297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2297<T extends unknown[], V> = [...T, V];

type TuplifyUnion2297<T, L = LastOf2297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2297<TuplifyUnion2297<Exclude<T, L>>, L>;

type DeepPartial2297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2297<T[P]> }
  : T;

type Paths2297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2297<K, Paths2297<T[K], Prev2297[D]>> : never }[keyof T]
  : never;

type Prev2297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2297 {
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

type ConfigPaths2297 = Paths2297<NestedConfig2297>;

interface HeavyProps2297 {
  config: DeepPartial2297<NestedConfig2297>;
  path?: ConfigPaths2297;
}

const HeavyComponent2297 = memo(function HeavyComponent2297({ config }: HeavyProps2297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2297.displayName = 'HeavyComponent2297';
export default HeavyComponent2297;

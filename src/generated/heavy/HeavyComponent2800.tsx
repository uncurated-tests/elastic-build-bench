'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2800<T> = T extends (infer U)[]
  ? DeepReadonlyArray2800<U>
  : T extends object
  ? DeepReadonlyObject2800<T>
  : T;

interface DeepReadonlyArray2800<T> extends ReadonlyArray<DeepReadonly2800<T>> {}

type DeepReadonlyObject2800<T> = {
  readonly [P in keyof T]: DeepReadonly2800<T[P]>;
};

type UnionToIntersection2800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2800<T> = UnionToIntersection2800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2800<T extends unknown[], V> = [...T, V];

type TuplifyUnion2800<T, L = LastOf2800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2800<TuplifyUnion2800<Exclude<T, L>>, L>;

type DeepPartial2800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2800<T[P]> }
  : T;

type Paths2800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2800<K, Paths2800<T[K], Prev2800[D]>> : never }[keyof T]
  : never;

type Prev2800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2800 {
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

type ConfigPaths2800 = Paths2800<NestedConfig2800>;

interface HeavyProps2800 {
  config: DeepPartial2800<NestedConfig2800>;
  path?: ConfigPaths2800;
}

const HeavyComponent2800 = memo(function HeavyComponent2800({ config }: HeavyProps2800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2800.displayName = 'HeavyComponent2800';
export default HeavyComponent2800;

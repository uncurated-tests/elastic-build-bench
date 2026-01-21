'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2480<T> = T extends (infer U)[]
  ? DeepReadonlyArray2480<U>
  : T extends object
  ? DeepReadonlyObject2480<T>
  : T;

interface DeepReadonlyArray2480<T> extends ReadonlyArray<DeepReadonly2480<T>> {}

type DeepReadonlyObject2480<T> = {
  readonly [P in keyof T]: DeepReadonly2480<T[P]>;
};

type UnionToIntersection2480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2480<T> = UnionToIntersection2480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2480<T extends unknown[], V> = [...T, V];

type TuplifyUnion2480<T, L = LastOf2480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2480<TuplifyUnion2480<Exclude<T, L>>, L>;

type DeepPartial2480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2480<T[P]> }
  : T;

type Paths2480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2480<K, Paths2480<T[K], Prev2480[D]>> : never }[keyof T]
  : never;

type Prev2480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2480 {
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

type ConfigPaths2480 = Paths2480<NestedConfig2480>;

interface HeavyProps2480 {
  config: DeepPartial2480<NestedConfig2480>;
  path?: ConfigPaths2480;
}

const HeavyComponent2480 = memo(function HeavyComponent2480({ config }: HeavyProps2480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2480.displayName = 'HeavyComponent2480';
export default HeavyComponent2480;

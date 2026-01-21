'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2646<T> = T extends (infer U)[]
  ? DeepReadonlyArray2646<U>
  : T extends object
  ? DeepReadonlyObject2646<T>
  : T;

interface DeepReadonlyArray2646<T> extends ReadonlyArray<DeepReadonly2646<T>> {}

type DeepReadonlyObject2646<T> = {
  readonly [P in keyof T]: DeepReadonly2646<T[P]>;
};

type UnionToIntersection2646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2646<T> = UnionToIntersection2646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2646<T extends unknown[], V> = [...T, V];

type TuplifyUnion2646<T, L = LastOf2646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2646<TuplifyUnion2646<Exclude<T, L>>, L>;

type DeepPartial2646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2646<T[P]> }
  : T;

type Paths2646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2646<K, Paths2646<T[K], Prev2646[D]>> : never }[keyof T]
  : never;

type Prev2646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2646 {
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

type ConfigPaths2646 = Paths2646<NestedConfig2646>;

interface HeavyProps2646 {
  config: DeepPartial2646<NestedConfig2646>;
  path?: ConfigPaths2646;
}

const HeavyComponent2646 = memo(function HeavyComponent2646({ config }: HeavyProps2646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2646.displayName = 'HeavyComponent2646';
export default HeavyComponent2646;

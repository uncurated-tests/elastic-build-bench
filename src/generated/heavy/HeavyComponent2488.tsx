'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2488<T> = T extends (infer U)[]
  ? DeepReadonlyArray2488<U>
  : T extends object
  ? DeepReadonlyObject2488<T>
  : T;

interface DeepReadonlyArray2488<T> extends ReadonlyArray<DeepReadonly2488<T>> {}

type DeepReadonlyObject2488<T> = {
  readonly [P in keyof T]: DeepReadonly2488<T[P]>;
};

type UnionToIntersection2488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2488<T> = UnionToIntersection2488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2488<T extends unknown[], V> = [...T, V];

type TuplifyUnion2488<T, L = LastOf2488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2488<TuplifyUnion2488<Exclude<T, L>>, L>;

type DeepPartial2488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2488<T[P]> }
  : T;

type Paths2488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2488<K, Paths2488<T[K], Prev2488[D]>> : never }[keyof T]
  : never;

type Prev2488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2488 {
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

type ConfigPaths2488 = Paths2488<NestedConfig2488>;

interface HeavyProps2488 {
  config: DeepPartial2488<NestedConfig2488>;
  path?: ConfigPaths2488;
}

const HeavyComponent2488 = memo(function HeavyComponent2488({ config }: HeavyProps2488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2488.displayName = 'HeavyComponent2488';
export default HeavyComponent2488;

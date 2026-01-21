'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly345<T> = T extends (infer U)[]
  ? DeepReadonlyArray345<U>
  : T extends object
  ? DeepReadonlyObject345<T>
  : T;

interface DeepReadonlyArray345<T> extends ReadonlyArray<DeepReadonly345<T>> {}

type DeepReadonlyObject345<T> = {
  readonly [P in keyof T]: DeepReadonly345<T[P]>;
};

type UnionToIntersection345<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf345<T> = UnionToIntersection345<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push345<T extends unknown[], V> = [...T, V];

type TuplifyUnion345<T, L = LastOf345<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push345<TuplifyUnion345<Exclude<T, L>>, L>;

type DeepPartial345<T> = T extends object
  ? { [P in keyof T]?: DeepPartial345<T[P]> }
  : T;

type Paths345<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join345<K, Paths345<T[K], Prev345[D]>> : never }[keyof T]
  : never;

type Prev345 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join345<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig345 {
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

type ConfigPaths345 = Paths345<NestedConfig345>;

interface HeavyProps345 {
  config: DeepPartial345<NestedConfig345>;
  path?: ConfigPaths345;
}

const HeavyComponent345 = memo(function HeavyComponent345({ config }: HeavyProps345) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 345) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-345 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H345: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent345.displayName = 'HeavyComponent345';
export default HeavyComponent345;

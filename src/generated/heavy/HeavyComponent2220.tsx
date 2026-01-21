'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2220<T> = T extends (infer U)[]
  ? DeepReadonlyArray2220<U>
  : T extends object
  ? DeepReadonlyObject2220<T>
  : T;

interface DeepReadonlyArray2220<T> extends ReadonlyArray<DeepReadonly2220<T>> {}

type DeepReadonlyObject2220<T> = {
  readonly [P in keyof T]: DeepReadonly2220<T[P]>;
};

type UnionToIntersection2220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2220<T> = UnionToIntersection2220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2220<T extends unknown[], V> = [...T, V];

type TuplifyUnion2220<T, L = LastOf2220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2220<TuplifyUnion2220<Exclude<T, L>>, L>;

type DeepPartial2220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2220<T[P]> }
  : T;

type Paths2220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2220<K, Paths2220<T[K], Prev2220[D]>> : never }[keyof T]
  : never;

type Prev2220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2220 {
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

type ConfigPaths2220 = Paths2220<NestedConfig2220>;

interface HeavyProps2220 {
  config: DeepPartial2220<NestedConfig2220>;
  path?: ConfigPaths2220;
}

const HeavyComponent2220 = memo(function HeavyComponent2220({ config }: HeavyProps2220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2220.displayName = 'HeavyComponent2220';
export default HeavyComponent2220;

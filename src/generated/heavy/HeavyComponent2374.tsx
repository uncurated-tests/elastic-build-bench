'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2374<T> = T extends (infer U)[]
  ? DeepReadonlyArray2374<U>
  : T extends object
  ? DeepReadonlyObject2374<T>
  : T;

interface DeepReadonlyArray2374<T> extends ReadonlyArray<DeepReadonly2374<T>> {}

type DeepReadonlyObject2374<T> = {
  readonly [P in keyof T]: DeepReadonly2374<T[P]>;
};

type UnionToIntersection2374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2374<T> = UnionToIntersection2374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2374<T extends unknown[], V> = [...T, V];

type TuplifyUnion2374<T, L = LastOf2374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2374<TuplifyUnion2374<Exclude<T, L>>, L>;

type DeepPartial2374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2374<T[P]> }
  : T;

type Paths2374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2374<K, Paths2374<T[K], Prev2374[D]>> : never }[keyof T]
  : never;

type Prev2374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2374 {
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

type ConfigPaths2374 = Paths2374<NestedConfig2374>;

interface HeavyProps2374 {
  config: DeepPartial2374<NestedConfig2374>;
  path?: ConfigPaths2374;
}

const HeavyComponent2374 = memo(function HeavyComponent2374({ config }: HeavyProps2374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2374.displayName = 'HeavyComponent2374';
export default HeavyComponent2374;

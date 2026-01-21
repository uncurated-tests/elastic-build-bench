'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2863<T> = T extends (infer U)[]
  ? DeepReadonlyArray2863<U>
  : T extends object
  ? DeepReadonlyObject2863<T>
  : T;

interface DeepReadonlyArray2863<T> extends ReadonlyArray<DeepReadonly2863<T>> {}

type DeepReadonlyObject2863<T> = {
  readonly [P in keyof T]: DeepReadonly2863<T[P]>;
};

type UnionToIntersection2863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2863<T> = UnionToIntersection2863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2863<T extends unknown[], V> = [...T, V];

type TuplifyUnion2863<T, L = LastOf2863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2863<TuplifyUnion2863<Exclude<T, L>>, L>;

type DeepPartial2863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2863<T[P]> }
  : T;

type Paths2863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2863<K, Paths2863<T[K], Prev2863[D]>> : never }[keyof T]
  : never;

type Prev2863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2863 {
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

type ConfigPaths2863 = Paths2863<NestedConfig2863>;

interface HeavyProps2863 {
  config: DeepPartial2863<NestedConfig2863>;
  path?: ConfigPaths2863;
}

const HeavyComponent2863 = memo(function HeavyComponent2863({ config }: HeavyProps2863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2863.displayName = 'HeavyComponent2863';
export default HeavyComponent2863;

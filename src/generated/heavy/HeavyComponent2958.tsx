'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2958<T> = T extends (infer U)[]
  ? DeepReadonlyArray2958<U>
  : T extends object
  ? DeepReadonlyObject2958<T>
  : T;

interface DeepReadonlyArray2958<T> extends ReadonlyArray<DeepReadonly2958<T>> {}

type DeepReadonlyObject2958<T> = {
  readonly [P in keyof T]: DeepReadonly2958<T[P]>;
};

type UnionToIntersection2958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2958<T> = UnionToIntersection2958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2958<T extends unknown[], V> = [...T, V];

type TuplifyUnion2958<T, L = LastOf2958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2958<TuplifyUnion2958<Exclude<T, L>>, L>;

type DeepPartial2958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2958<T[P]> }
  : T;

type Paths2958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2958<K, Paths2958<T[K], Prev2958[D]>> : never }[keyof T]
  : never;

type Prev2958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2958 {
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

type ConfigPaths2958 = Paths2958<NestedConfig2958>;

interface HeavyProps2958 {
  config: DeepPartial2958<NestedConfig2958>;
  path?: ConfigPaths2958;
}

const HeavyComponent2958 = memo(function HeavyComponent2958({ config }: HeavyProps2958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2958.displayName = 'HeavyComponent2958';
export default HeavyComponent2958;

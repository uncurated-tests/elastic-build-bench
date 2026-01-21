'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2270<T> = T extends (infer U)[]
  ? DeepReadonlyArray2270<U>
  : T extends object
  ? DeepReadonlyObject2270<T>
  : T;

interface DeepReadonlyArray2270<T> extends ReadonlyArray<DeepReadonly2270<T>> {}

type DeepReadonlyObject2270<T> = {
  readonly [P in keyof T]: DeepReadonly2270<T[P]>;
};

type UnionToIntersection2270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2270<T> = UnionToIntersection2270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2270<T extends unknown[], V> = [...T, V];

type TuplifyUnion2270<T, L = LastOf2270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2270<TuplifyUnion2270<Exclude<T, L>>, L>;

type DeepPartial2270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2270<T[P]> }
  : T;

type Paths2270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2270<K, Paths2270<T[K], Prev2270[D]>> : never }[keyof T]
  : never;

type Prev2270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2270 {
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

type ConfigPaths2270 = Paths2270<NestedConfig2270>;

interface HeavyProps2270 {
  config: DeepPartial2270<NestedConfig2270>;
  path?: ConfigPaths2270;
}

const HeavyComponent2270 = memo(function HeavyComponent2270({ config }: HeavyProps2270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2270.displayName = 'HeavyComponent2270';
export default HeavyComponent2270;

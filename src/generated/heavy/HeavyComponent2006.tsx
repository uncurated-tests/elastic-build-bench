'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2006<T> = T extends (infer U)[]
  ? DeepReadonlyArray2006<U>
  : T extends object
  ? DeepReadonlyObject2006<T>
  : T;

interface DeepReadonlyArray2006<T> extends ReadonlyArray<DeepReadonly2006<T>> {}

type DeepReadonlyObject2006<T> = {
  readonly [P in keyof T]: DeepReadonly2006<T[P]>;
};

type UnionToIntersection2006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2006<T> = UnionToIntersection2006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2006<T extends unknown[], V> = [...T, V];

type TuplifyUnion2006<T, L = LastOf2006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2006<TuplifyUnion2006<Exclude<T, L>>, L>;

type DeepPartial2006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2006<T[P]> }
  : T;

type Paths2006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2006<K, Paths2006<T[K], Prev2006[D]>> : never }[keyof T]
  : never;

type Prev2006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2006 {
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

type ConfigPaths2006 = Paths2006<NestedConfig2006>;

interface HeavyProps2006 {
  config: DeepPartial2006<NestedConfig2006>;
  path?: ConfigPaths2006;
}

const HeavyComponent2006 = memo(function HeavyComponent2006({ config }: HeavyProps2006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2006.displayName = 'HeavyComponent2006';
export default HeavyComponent2006;

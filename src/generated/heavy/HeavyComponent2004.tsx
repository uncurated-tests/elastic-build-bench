'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2004<T> = T extends (infer U)[]
  ? DeepReadonlyArray2004<U>
  : T extends object
  ? DeepReadonlyObject2004<T>
  : T;

interface DeepReadonlyArray2004<T> extends ReadonlyArray<DeepReadonly2004<T>> {}

type DeepReadonlyObject2004<T> = {
  readonly [P in keyof T]: DeepReadonly2004<T[P]>;
};

type UnionToIntersection2004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2004<T> = UnionToIntersection2004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2004<T extends unknown[], V> = [...T, V];

type TuplifyUnion2004<T, L = LastOf2004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2004<TuplifyUnion2004<Exclude<T, L>>, L>;

type DeepPartial2004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2004<T[P]> }
  : T;

type Paths2004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2004<K, Paths2004<T[K], Prev2004[D]>> : never }[keyof T]
  : never;

type Prev2004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2004 {
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

type ConfigPaths2004 = Paths2004<NestedConfig2004>;

interface HeavyProps2004 {
  config: DeepPartial2004<NestedConfig2004>;
  path?: ConfigPaths2004;
}

const HeavyComponent2004 = memo(function HeavyComponent2004({ config }: HeavyProps2004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2004.displayName = 'HeavyComponent2004';
export default HeavyComponent2004;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2003<T> = T extends (infer U)[]
  ? DeepReadonlyArray2003<U>
  : T extends object
  ? DeepReadonlyObject2003<T>
  : T;

interface DeepReadonlyArray2003<T> extends ReadonlyArray<DeepReadonly2003<T>> {}

type DeepReadonlyObject2003<T> = {
  readonly [P in keyof T]: DeepReadonly2003<T[P]>;
};

type UnionToIntersection2003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2003<T> = UnionToIntersection2003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2003<T extends unknown[], V> = [...T, V];

type TuplifyUnion2003<T, L = LastOf2003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2003<TuplifyUnion2003<Exclude<T, L>>, L>;

type DeepPartial2003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2003<T[P]> }
  : T;

type Paths2003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2003<K, Paths2003<T[K], Prev2003[D]>> : never }[keyof T]
  : never;

type Prev2003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2003 {
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

type ConfigPaths2003 = Paths2003<NestedConfig2003>;

interface HeavyProps2003 {
  config: DeepPartial2003<NestedConfig2003>;
  path?: ConfigPaths2003;
}

const HeavyComponent2003 = memo(function HeavyComponent2003({ config }: HeavyProps2003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2003.displayName = 'HeavyComponent2003';
export default HeavyComponent2003;

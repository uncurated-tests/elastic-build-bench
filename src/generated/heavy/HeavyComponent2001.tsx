'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2001<T> = T extends (infer U)[]
  ? DeepReadonlyArray2001<U>
  : T extends object
  ? DeepReadonlyObject2001<T>
  : T;

interface DeepReadonlyArray2001<T> extends ReadonlyArray<DeepReadonly2001<T>> {}

type DeepReadonlyObject2001<T> = {
  readonly [P in keyof T]: DeepReadonly2001<T[P]>;
};

type UnionToIntersection2001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2001<T> = UnionToIntersection2001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2001<T extends unknown[], V> = [...T, V];

type TuplifyUnion2001<T, L = LastOf2001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2001<TuplifyUnion2001<Exclude<T, L>>, L>;

type DeepPartial2001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2001<T[P]> }
  : T;

type Paths2001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2001<K, Paths2001<T[K], Prev2001[D]>> : never }[keyof T]
  : never;

type Prev2001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2001 {
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

type ConfigPaths2001 = Paths2001<NestedConfig2001>;

interface HeavyProps2001 {
  config: DeepPartial2001<NestedConfig2001>;
  path?: ConfigPaths2001;
}

const HeavyComponent2001 = memo(function HeavyComponent2001({ config }: HeavyProps2001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2001.displayName = 'HeavyComponent2001';
export default HeavyComponent2001;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2005<T> = T extends (infer U)[]
  ? DeepReadonlyArray2005<U>
  : T extends object
  ? DeepReadonlyObject2005<T>
  : T;

interface DeepReadonlyArray2005<T> extends ReadonlyArray<DeepReadonly2005<T>> {}

type DeepReadonlyObject2005<T> = {
  readonly [P in keyof T]: DeepReadonly2005<T[P]>;
};

type UnionToIntersection2005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2005<T> = UnionToIntersection2005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2005<T extends unknown[], V> = [...T, V];

type TuplifyUnion2005<T, L = LastOf2005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2005<TuplifyUnion2005<Exclude<T, L>>, L>;

type DeepPartial2005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2005<T[P]> }
  : T;

type Paths2005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2005<K, Paths2005<T[K], Prev2005[D]>> : never }[keyof T]
  : never;

type Prev2005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2005 {
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

type ConfigPaths2005 = Paths2005<NestedConfig2005>;

interface HeavyProps2005 {
  config: DeepPartial2005<NestedConfig2005>;
  path?: ConfigPaths2005;
}

const HeavyComponent2005 = memo(function HeavyComponent2005({ config }: HeavyProps2005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2005.displayName = 'HeavyComponent2005';
export default HeavyComponent2005;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly80<T> = T extends (infer U)[]
  ? DeepReadonlyArray80<U>
  : T extends object
  ? DeepReadonlyObject80<T>
  : T;

interface DeepReadonlyArray80<T> extends ReadonlyArray<DeepReadonly80<T>> {}

type DeepReadonlyObject80<T> = {
  readonly [P in keyof T]: DeepReadonly80<T[P]>;
};

type UnionToIntersection80<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf80<T> = UnionToIntersection80<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push80<T extends unknown[], V> = [...T, V];

type TuplifyUnion80<T, L = LastOf80<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push80<TuplifyUnion80<Exclude<T, L>>, L>;

type DeepPartial80<T> = T extends object
  ? { [P in keyof T]?: DeepPartial80<T[P]> }
  : T;

type Paths80<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join80<K, Paths80<T[K], Prev80[D]>> : never }[keyof T]
  : never;

type Prev80 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join80<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig80 {
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

type ConfigPaths80 = Paths80<NestedConfig80>;

interface HeavyProps80 {
  config: DeepPartial80<NestedConfig80>;
  path?: ConfigPaths80;
}

const HeavyComponent80 = memo(function HeavyComponent80({ config }: HeavyProps80) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 80) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-80 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H80: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent80.displayName = 'HeavyComponent80';
export default HeavyComponent80;

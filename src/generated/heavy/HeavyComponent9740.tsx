'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9740<T> = T extends (infer U)[]
  ? DeepReadonlyArray9740<U>
  : T extends object
  ? DeepReadonlyObject9740<T>
  : T;

interface DeepReadonlyArray9740<T> extends ReadonlyArray<DeepReadonly9740<T>> {}

type DeepReadonlyObject9740<T> = {
  readonly [P in keyof T]: DeepReadonly9740<T[P]>;
};

type UnionToIntersection9740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9740<T> = UnionToIntersection9740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9740<T extends unknown[], V> = [...T, V];

type TuplifyUnion9740<T, L = LastOf9740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9740<TuplifyUnion9740<Exclude<T, L>>, L>;

type DeepPartial9740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9740<T[P]> }
  : T;

type Paths9740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9740<K, Paths9740<T[K], Prev9740[D]>> : never }[keyof T]
  : never;

type Prev9740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9740 {
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

type ConfigPaths9740 = Paths9740<NestedConfig9740>;

interface HeavyProps9740 {
  config: DeepPartial9740<NestedConfig9740>;
  path?: ConfigPaths9740;
}

const HeavyComponent9740 = memo(function HeavyComponent9740({ config }: HeavyProps9740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9740.displayName = 'HeavyComponent9740';
export default HeavyComponent9740;

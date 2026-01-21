'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9920<T> = T extends (infer U)[]
  ? DeepReadonlyArray9920<U>
  : T extends object
  ? DeepReadonlyObject9920<T>
  : T;

interface DeepReadonlyArray9920<T> extends ReadonlyArray<DeepReadonly9920<T>> {}

type DeepReadonlyObject9920<T> = {
  readonly [P in keyof T]: DeepReadonly9920<T[P]>;
};

type UnionToIntersection9920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9920<T> = UnionToIntersection9920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9920<T extends unknown[], V> = [...T, V];

type TuplifyUnion9920<T, L = LastOf9920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9920<TuplifyUnion9920<Exclude<T, L>>, L>;

type DeepPartial9920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9920<T[P]> }
  : T;

type Paths9920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9920<K, Paths9920<T[K], Prev9920[D]>> : never }[keyof T]
  : never;

type Prev9920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9920 {
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

type ConfigPaths9920 = Paths9920<NestedConfig9920>;

interface HeavyProps9920 {
  config: DeepPartial9920<NestedConfig9920>;
  path?: ConfigPaths9920;
}

const HeavyComponent9920 = memo(function HeavyComponent9920({ config }: HeavyProps9920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9920.displayName = 'HeavyComponent9920';
export default HeavyComponent9920;

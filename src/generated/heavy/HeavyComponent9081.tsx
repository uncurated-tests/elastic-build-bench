'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9081<T> = T extends (infer U)[]
  ? DeepReadonlyArray9081<U>
  : T extends object
  ? DeepReadonlyObject9081<T>
  : T;

interface DeepReadonlyArray9081<T> extends ReadonlyArray<DeepReadonly9081<T>> {}

type DeepReadonlyObject9081<T> = {
  readonly [P in keyof T]: DeepReadonly9081<T[P]>;
};

type UnionToIntersection9081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9081<T> = UnionToIntersection9081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9081<T extends unknown[], V> = [...T, V];

type TuplifyUnion9081<T, L = LastOf9081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9081<TuplifyUnion9081<Exclude<T, L>>, L>;

type DeepPartial9081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9081<T[P]> }
  : T;

type Paths9081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9081<K, Paths9081<T[K], Prev9081[D]>> : never }[keyof T]
  : never;

type Prev9081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9081 {
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

type ConfigPaths9081 = Paths9081<NestedConfig9081>;

interface HeavyProps9081 {
  config: DeepPartial9081<NestedConfig9081>;
  path?: ConfigPaths9081;
}

const HeavyComponent9081 = memo(function HeavyComponent9081({ config }: HeavyProps9081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9081.displayName = 'HeavyComponent9081';
export default HeavyComponent9081;

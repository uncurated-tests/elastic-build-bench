'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9957<T> = T extends (infer U)[]
  ? DeepReadonlyArray9957<U>
  : T extends object
  ? DeepReadonlyObject9957<T>
  : T;

interface DeepReadonlyArray9957<T> extends ReadonlyArray<DeepReadonly9957<T>> {}

type DeepReadonlyObject9957<T> = {
  readonly [P in keyof T]: DeepReadonly9957<T[P]>;
};

type UnionToIntersection9957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9957<T> = UnionToIntersection9957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9957<T extends unknown[], V> = [...T, V];

type TuplifyUnion9957<T, L = LastOf9957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9957<TuplifyUnion9957<Exclude<T, L>>, L>;

type DeepPartial9957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9957<T[P]> }
  : T;

type Paths9957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9957<K, Paths9957<T[K], Prev9957[D]>> : never }[keyof T]
  : never;

type Prev9957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9957 {
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

type ConfigPaths9957 = Paths9957<NestedConfig9957>;

interface HeavyProps9957 {
  config: DeepPartial9957<NestedConfig9957>;
  path?: ConfigPaths9957;
}

const HeavyComponent9957 = memo(function HeavyComponent9957({ config }: HeavyProps9957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9957.displayName = 'HeavyComponent9957';
export default HeavyComponent9957;

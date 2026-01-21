'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9651<T> = T extends (infer U)[]
  ? DeepReadonlyArray9651<U>
  : T extends object
  ? DeepReadonlyObject9651<T>
  : T;

interface DeepReadonlyArray9651<T> extends ReadonlyArray<DeepReadonly9651<T>> {}

type DeepReadonlyObject9651<T> = {
  readonly [P in keyof T]: DeepReadonly9651<T[P]>;
};

type UnionToIntersection9651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9651<T> = UnionToIntersection9651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9651<T extends unknown[], V> = [...T, V];

type TuplifyUnion9651<T, L = LastOf9651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9651<TuplifyUnion9651<Exclude<T, L>>, L>;

type DeepPartial9651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9651<T[P]> }
  : T;

type Paths9651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9651<K, Paths9651<T[K], Prev9651[D]>> : never }[keyof T]
  : never;

type Prev9651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9651 {
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

type ConfigPaths9651 = Paths9651<NestedConfig9651>;

interface HeavyProps9651 {
  config: DeepPartial9651<NestedConfig9651>;
  path?: ConfigPaths9651;
}

const HeavyComponent9651 = memo(function HeavyComponent9651({ config }: HeavyProps9651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9651.displayName = 'HeavyComponent9651';
export default HeavyComponent9651;

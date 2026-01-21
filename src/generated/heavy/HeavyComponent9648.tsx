'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9648<T> = T extends (infer U)[]
  ? DeepReadonlyArray9648<U>
  : T extends object
  ? DeepReadonlyObject9648<T>
  : T;

interface DeepReadonlyArray9648<T> extends ReadonlyArray<DeepReadonly9648<T>> {}

type DeepReadonlyObject9648<T> = {
  readonly [P in keyof T]: DeepReadonly9648<T[P]>;
};

type UnionToIntersection9648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9648<T> = UnionToIntersection9648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9648<T extends unknown[], V> = [...T, V];

type TuplifyUnion9648<T, L = LastOf9648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9648<TuplifyUnion9648<Exclude<T, L>>, L>;

type DeepPartial9648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9648<T[P]> }
  : T;

type Paths9648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9648<K, Paths9648<T[K], Prev9648[D]>> : never }[keyof T]
  : never;

type Prev9648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9648 {
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

type ConfigPaths9648 = Paths9648<NestedConfig9648>;

interface HeavyProps9648 {
  config: DeepPartial9648<NestedConfig9648>;
  path?: ConfigPaths9648;
}

const HeavyComponent9648 = memo(function HeavyComponent9648({ config }: HeavyProps9648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9648.displayName = 'HeavyComponent9648';
export default HeavyComponent9648;

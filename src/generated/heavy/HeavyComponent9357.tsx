'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9357<T> = T extends (infer U)[]
  ? DeepReadonlyArray9357<U>
  : T extends object
  ? DeepReadonlyObject9357<T>
  : T;

interface DeepReadonlyArray9357<T> extends ReadonlyArray<DeepReadonly9357<T>> {}

type DeepReadonlyObject9357<T> = {
  readonly [P in keyof T]: DeepReadonly9357<T[P]>;
};

type UnionToIntersection9357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9357<T> = UnionToIntersection9357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9357<T extends unknown[], V> = [...T, V];

type TuplifyUnion9357<T, L = LastOf9357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9357<TuplifyUnion9357<Exclude<T, L>>, L>;

type DeepPartial9357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9357<T[P]> }
  : T;

type Paths9357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9357<K, Paths9357<T[K], Prev9357[D]>> : never }[keyof T]
  : never;

type Prev9357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9357 {
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

type ConfigPaths9357 = Paths9357<NestedConfig9357>;

interface HeavyProps9357 {
  config: DeepPartial9357<NestedConfig9357>;
  path?: ConfigPaths9357;
}

const HeavyComponent9357 = memo(function HeavyComponent9357({ config }: HeavyProps9357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9357.displayName = 'HeavyComponent9357';
export default HeavyComponent9357;

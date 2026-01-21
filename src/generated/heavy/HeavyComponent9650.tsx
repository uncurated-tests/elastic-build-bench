'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9650<T> = T extends (infer U)[]
  ? DeepReadonlyArray9650<U>
  : T extends object
  ? DeepReadonlyObject9650<T>
  : T;

interface DeepReadonlyArray9650<T> extends ReadonlyArray<DeepReadonly9650<T>> {}

type DeepReadonlyObject9650<T> = {
  readonly [P in keyof T]: DeepReadonly9650<T[P]>;
};

type UnionToIntersection9650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9650<T> = UnionToIntersection9650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9650<T extends unknown[], V> = [...T, V];

type TuplifyUnion9650<T, L = LastOf9650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9650<TuplifyUnion9650<Exclude<T, L>>, L>;

type DeepPartial9650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9650<T[P]> }
  : T;

type Paths9650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9650<K, Paths9650<T[K], Prev9650[D]>> : never }[keyof T]
  : never;

type Prev9650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9650 {
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

type ConfigPaths9650 = Paths9650<NestedConfig9650>;

interface HeavyProps9650 {
  config: DeepPartial9650<NestedConfig9650>;
  path?: ConfigPaths9650;
}

const HeavyComponent9650 = memo(function HeavyComponent9650({ config }: HeavyProps9650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9650.displayName = 'HeavyComponent9650';
export default HeavyComponent9650;

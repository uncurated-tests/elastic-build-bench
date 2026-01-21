'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9601<T> = T extends (infer U)[]
  ? DeepReadonlyArray9601<U>
  : T extends object
  ? DeepReadonlyObject9601<T>
  : T;

interface DeepReadonlyArray9601<T> extends ReadonlyArray<DeepReadonly9601<T>> {}

type DeepReadonlyObject9601<T> = {
  readonly [P in keyof T]: DeepReadonly9601<T[P]>;
};

type UnionToIntersection9601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9601<T> = UnionToIntersection9601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9601<T extends unknown[], V> = [...T, V];

type TuplifyUnion9601<T, L = LastOf9601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9601<TuplifyUnion9601<Exclude<T, L>>, L>;

type DeepPartial9601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9601<T[P]> }
  : T;

type Paths9601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9601<K, Paths9601<T[K], Prev9601[D]>> : never }[keyof T]
  : never;

type Prev9601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9601 {
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

type ConfigPaths9601 = Paths9601<NestedConfig9601>;

interface HeavyProps9601 {
  config: DeepPartial9601<NestedConfig9601>;
  path?: ConfigPaths9601;
}

const HeavyComponent9601 = memo(function HeavyComponent9601({ config }: HeavyProps9601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9601.displayName = 'HeavyComponent9601';
export default HeavyComponent9601;

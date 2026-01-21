'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9351<T> = T extends (infer U)[]
  ? DeepReadonlyArray9351<U>
  : T extends object
  ? DeepReadonlyObject9351<T>
  : T;

interface DeepReadonlyArray9351<T> extends ReadonlyArray<DeepReadonly9351<T>> {}

type DeepReadonlyObject9351<T> = {
  readonly [P in keyof T]: DeepReadonly9351<T[P]>;
};

type UnionToIntersection9351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9351<T> = UnionToIntersection9351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9351<T extends unknown[], V> = [...T, V];

type TuplifyUnion9351<T, L = LastOf9351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9351<TuplifyUnion9351<Exclude<T, L>>, L>;

type DeepPartial9351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9351<T[P]> }
  : T;

type Paths9351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9351<K, Paths9351<T[K], Prev9351[D]>> : never }[keyof T]
  : never;

type Prev9351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9351 {
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

type ConfigPaths9351 = Paths9351<NestedConfig9351>;

interface HeavyProps9351 {
  config: DeepPartial9351<NestedConfig9351>;
  path?: ConfigPaths9351;
}

const HeavyComponent9351 = memo(function HeavyComponent9351({ config }: HeavyProps9351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9351.displayName = 'HeavyComponent9351';
export default HeavyComponent9351;

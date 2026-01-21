'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9005<T> = T extends (infer U)[]
  ? DeepReadonlyArray9005<U>
  : T extends object
  ? DeepReadonlyObject9005<T>
  : T;

interface DeepReadonlyArray9005<T> extends ReadonlyArray<DeepReadonly9005<T>> {}

type DeepReadonlyObject9005<T> = {
  readonly [P in keyof T]: DeepReadonly9005<T[P]>;
};

type UnionToIntersection9005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9005<T> = UnionToIntersection9005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9005<T extends unknown[], V> = [...T, V];

type TuplifyUnion9005<T, L = LastOf9005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9005<TuplifyUnion9005<Exclude<T, L>>, L>;

type DeepPartial9005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9005<T[P]> }
  : T;

type Paths9005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9005<K, Paths9005<T[K], Prev9005[D]>> : never }[keyof T]
  : never;

type Prev9005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9005 {
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

type ConfigPaths9005 = Paths9005<NestedConfig9005>;

interface HeavyProps9005 {
  config: DeepPartial9005<NestedConfig9005>;
  path?: ConfigPaths9005;
}

const HeavyComponent9005 = memo(function HeavyComponent9005({ config }: HeavyProps9005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9005.displayName = 'HeavyComponent9005';
export default HeavyComponent9005;

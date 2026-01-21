'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9427<T> = T extends (infer U)[]
  ? DeepReadonlyArray9427<U>
  : T extends object
  ? DeepReadonlyObject9427<T>
  : T;

interface DeepReadonlyArray9427<T> extends ReadonlyArray<DeepReadonly9427<T>> {}

type DeepReadonlyObject9427<T> = {
  readonly [P in keyof T]: DeepReadonly9427<T[P]>;
};

type UnionToIntersection9427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9427<T> = UnionToIntersection9427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9427<T extends unknown[], V> = [...T, V];

type TuplifyUnion9427<T, L = LastOf9427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9427<TuplifyUnion9427<Exclude<T, L>>, L>;

type DeepPartial9427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9427<T[P]> }
  : T;

type Paths9427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9427<K, Paths9427<T[K], Prev9427[D]>> : never }[keyof T]
  : never;

type Prev9427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9427 {
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

type ConfigPaths9427 = Paths9427<NestedConfig9427>;

interface HeavyProps9427 {
  config: DeepPartial9427<NestedConfig9427>;
  path?: ConfigPaths9427;
}

const HeavyComponent9427 = memo(function HeavyComponent9427({ config }: HeavyProps9427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9427.displayName = 'HeavyComponent9427';
export default HeavyComponent9427;

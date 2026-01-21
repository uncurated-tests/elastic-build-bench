'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9180<T> = T extends (infer U)[]
  ? DeepReadonlyArray9180<U>
  : T extends object
  ? DeepReadonlyObject9180<T>
  : T;

interface DeepReadonlyArray9180<T> extends ReadonlyArray<DeepReadonly9180<T>> {}

type DeepReadonlyObject9180<T> = {
  readonly [P in keyof T]: DeepReadonly9180<T[P]>;
};

type UnionToIntersection9180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9180<T> = UnionToIntersection9180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9180<T extends unknown[], V> = [...T, V];

type TuplifyUnion9180<T, L = LastOf9180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9180<TuplifyUnion9180<Exclude<T, L>>, L>;

type DeepPartial9180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9180<T[P]> }
  : T;

type Paths9180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9180<K, Paths9180<T[K], Prev9180[D]>> : never }[keyof T]
  : never;

type Prev9180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9180 {
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

type ConfigPaths9180 = Paths9180<NestedConfig9180>;

interface HeavyProps9180 {
  config: DeepPartial9180<NestedConfig9180>;
  path?: ConfigPaths9180;
}

const HeavyComponent9180 = memo(function HeavyComponent9180({ config }: HeavyProps9180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9180.displayName = 'HeavyComponent9180';
export default HeavyComponent9180;

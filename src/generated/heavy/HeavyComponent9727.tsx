'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9727<T> = T extends (infer U)[]
  ? DeepReadonlyArray9727<U>
  : T extends object
  ? DeepReadonlyObject9727<T>
  : T;

interface DeepReadonlyArray9727<T> extends ReadonlyArray<DeepReadonly9727<T>> {}

type DeepReadonlyObject9727<T> = {
  readonly [P in keyof T]: DeepReadonly9727<T[P]>;
};

type UnionToIntersection9727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9727<T> = UnionToIntersection9727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9727<T extends unknown[], V> = [...T, V];

type TuplifyUnion9727<T, L = LastOf9727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9727<TuplifyUnion9727<Exclude<T, L>>, L>;

type DeepPartial9727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9727<T[P]> }
  : T;

type Paths9727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9727<K, Paths9727<T[K], Prev9727[D]>> : never }[keyof T]
  : never;

type Prev9727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9727 {
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

type ConfigPaths9727 = Paths9727<NestedConfig9727>;

interface HeavyProps9727 {
  config: DeepPartial9727<NestedConfig9727>;
  path?: ConfigPaths9727;
}

const HeavyComponent9727 = memo(function HeavyComponent9727({ config }: HeavyProps9727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9727.displayName = 'HeavyComponent9727';
export default HeavyComponent9727;

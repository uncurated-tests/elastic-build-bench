'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9763<T> = T extends (infer U)[]
  ? DeepReadonlyArray9763<U>
  : T extends object
  ? DeepReadonlyObject9763<T>
  : T;

interface DeepReadonlyArray9763<T> extends ReadonlyArray<DeepReadonly9763<T>> {}

type DeepReadonlyObject9763<T> = {
  readonly [P in keyof T]: DeepReadonly9763<T[P]>;
};

type UnionToIntersection9763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9763<T> = UnionToIntersection9763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9763<T extends unknown[], V> = [...T, V];

type TuplifyUnion9763<T, L = LastOf9763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9763<TuplifyUnion9763<Exclude<T, L>>, L>;

type DeepPartial9763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9763<T[P]> }
  : T;

type Paths9763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9763<K, Paths9763<T[K], Prev9763[D]>> : never }[keyof T]
  : never;

type Prev9763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9763 {
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

type ConfigPaths9763 = Paths9763<NestedConfig9763>;

interface HeavyProps9763 {
  config: DeepPartial9763<NestedConfig9763>;
  path?: ConfigPaths9763;
}

const HeavyComponent9763 = memo(function HeavyComponent9763({ config }: HeavyProps9763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9763.displayName = 'HeavyComponent9763';
export default HeavyComponent9763;

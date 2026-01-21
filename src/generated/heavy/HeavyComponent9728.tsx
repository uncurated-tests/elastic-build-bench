'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9728<T> = T extends (infer U)[]
  ? DeepReadonlyArray9728<U>
  : T extends object
  ? DeepReadonlyObject9728<T>
  : T;

interface DeepReadonlyArray9728<T> extends ReadonlyArray<DeepReadonly9728<T>> {}

type DeepReadonlyObject9728<T> = {
  readonly [P in keyof T]: DeepReadonly9728<T[P]>;
};

type UnionToIntersection9728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9728<T> = UnionToIntersection9728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9728<T extends unknown[], V> = [...T, V];

type TuplifyUnion9728<T, L = LastOf9728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9728<TuplifyUnion9728<Exclude<T, L>>, L>;

type DeepPartial9728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9728<T[P]> }
  : T;

type Paths9728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9728<K, Paths9728<T[K], Prev9728[D]>> : never }[keyof T]
  : never;

type Prev9728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9728 {
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

type ConfigPaths9728 = Paths9728<NestedConfig9728>;

interface HeavyProps9728 {
  config: DeepPartial9728<NestedConfig9728>;
  path?: ConfigPaths9728;
}

const HeavyComponent9728 = memo(function HeavyComponent9728({ config }: HeavyProps9728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9728.displayName = 'HeavyComponent9728';
export default HeavyComponent9728;

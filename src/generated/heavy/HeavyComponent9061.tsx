'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9061<T> = T extends (infer U)[]
  ? DeepReadonlyArray9061<U>
  : T extends object
  ? DeepReadonlyObject9061<T>
  : T;

interface DeepReadonlyArray9061<T> extends ReadonlyArray<DeepReadonly9061<T>> {}

type DeepReadonlyObject9061<T> = {
  readonly [P in keyof T]: DeepReadonly9061<T[P]>;
};

type UnionToIntersection9061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9061<T> = UnionToIntersection9061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9061<T extends unknown[], V> = [...T, V];

type TuplifyUnion9061<T, L = LastOf9061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9061<TuplifyUnion9061<Exclude<T, L>>, L>;

type DeepPartial9061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9061<T[P]> }
  : T;

type Paths9061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9061<K, Paths9061<T[K], Prev9061[D]>> : never }[keyof T]
  : never;

type Prev9061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9061 {
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

type ConfigPaths9061 = Paths9061<NestedConfig9061>;

interface HeavyProps9061 {
  config: DeepPartial9061<NestedConfig9061>;
  path?: ConfigPaths9061;
}

const HeavyComponent9061 = memo(function HeavyComponent9061({ config }: HeavyProps9061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9061.displayName = 'HeavyComponent9061';
export default HeavyComponent9061;

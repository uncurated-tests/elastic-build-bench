'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9927<T> = T extends (infer U)[]
  ? DeepReadonlyArray9927<U>
  : T extends object
  ? DeepReadonlyObject9927<T>
  : T;

interface DeepReadonlyArray9927<T> extends ReadonlyArray<DeepReadonly9927<T>> {}

type DeepReadonlyObject9927<T> = {
  readonly [P in keyof T]: DeepReadonly9927<T[P]>;
};

type UnionToIntersection9927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9927<T> = UnionToIntersection9927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9927<T extends unknown[], V> = [...T, V];

type TuplifyUnion9927<T, L = LastOf9927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9927<TuplifyUnion9927<Exclude<T, L>>, L>;

type DeepPartial9927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9927<T[P]> }
  : T;

type Paths9927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9927<K, Paths9927<T[K], Prev9927[D]>> : never }[keyof T]
  : never;

type Prev9927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9927 {
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

type ConfigPaths9927 = Paths9927<NestedConfig9927>;

interface HeavyProps9927 {
  config: DeepPartial9927<NestedConfig9927>;
  path?: ConfigPaths9927;
}

const HeavyComponent9927 = memo(function HeavyComponent9927({ config }: HeavyProps9927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9927.displayName = 'HeavyComponent9927';
export default HeavyComponent9927;

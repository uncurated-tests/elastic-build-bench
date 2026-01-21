'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9370<T> = T extends (infer U)[]
  ? DeepReadonlyArray9370<U>
  : T extends object
  ? DeepReadonlyObject9370<T>
  : T;

interface DeepReadonlyArray9370<T> extends ReadonlyArray<DeepReadonly9370<T>> {}

type DeepReadonlyObject9370<T> = {
  readonly [P in keyof T]: DeepReadonly9370<T[P]>;
};

type UnionToIntersection9370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9370<T> = UnionToIntersection9370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9370<T extends unknown[], V> = [...T, V];

type TuplifyUnion9370<T, L = LastOf9370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9370<TuplifyUnion9370<Exclude<T, L>>, L>;

type DeepPartial9370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9370<T[P]> }
  : T;

type Paths9370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9370<K, Paths9370<T[K], Prev9370[D]>> : never }[keyof T]
  : never;

type Prev9370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9370 {
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

type ConfigPaths9370 = Paths9370<NestedConfig9370>;

interface HeavyProps9370 {
  config: DeepPartial9370<NestedConfig9370>;
  path?: ConfigPaths9370;
}

const HeavyComponent9370 = memo(function HeavyComponent9370({ config }: HeavyProps9370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9370.displayName = 'HeavyComponent9370';
export default HeavyComponent9370;

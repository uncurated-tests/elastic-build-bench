'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9196<T> = T extends (infer U)[]
  ? DeepReadonlyArray9196<U>
  : T extends object
  ? DeepReadonlyObject9196<T>
  : T;

interface DeepReadonlyArray9196<T> extends ReadonlyArray<DeepReadonly9196<T>> {}

type DeepReadonlyObject9196<T> = {
  readonly [P in keyof T]: DeepReadonly9196<T[P]>;
};

type UnionToIntersection9196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9196<T> = UnionToIntersection9196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9196<T extends unknown[], V> = [...T, V];

type TuplifyUnion9196<T, L = LastOf9196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9196<TuplifyUnion9196<Exclude<T, L>>, L>;

type DeepPartial9196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9196<T[P]> }
  : T;

type Paths9196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9196<K, Paths9196<T[K], Prev9196[D]>> : never }[keyof T]
  : never;

type Prev9196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9196 {
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

type ConfigPaths9196 = Paths9196<NestedConfig9196>;

interface HeavyProps9196 {
  config: DeepPartial9196<NestedConfig9196>;
  path?: ConfigPaths9196;
}

const HeavyComponent9196 = memo(function HeavyComponent9196({ config }: HeavyProps9196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9196.displayName = 'HeavyComponent9196';
export default HeavyComponent9196;

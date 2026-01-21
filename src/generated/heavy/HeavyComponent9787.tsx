'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9787<T> = T extends (infer U)[]
  ? DeepReadonlyArray9787<U>
  : T extends object
  ? DeepReadonlyObject9787<T>
  : T;

interface DeepReadonlyArray9787<T> extends ReadonlyArray<DeepReadonly9787<T>> {}

type DeepReadonlyObject9787<T> = {
  readonly [P in keyof T]: DeepReadonly9787<T[P]>;
};

type UnionToIntersection9787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9787<T> = UnionToIntersection9787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9787<T extends unknown[], V> = [...T, V];

type TuplifyUnion9787<T, L = LastOf9787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9787<TuplifyUnion9787<Exclude<T, L>>, L>;

type DeepPartial9787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9787<T[P]> }
  : T;

type Paths9787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9787<K, Paths9787<T[K], Prev9787[D]>> : never }[keyof T]
  : never;

type Prev9787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9787 {
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

type ConfigPaths9787 = Paths9787<NestedConfig9787>;

interface HeavyProps9787 {
  config: DeepPartial9787<NestedConfig9787>;
  path?: ConfigPaths9787;
}

const HeavyComponent9787 = memo(function HeavyComponent9787({ config }: HeavyProps9787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9787.displayName = 'HeavyComponent9787';
export default HeavyComponent9787;

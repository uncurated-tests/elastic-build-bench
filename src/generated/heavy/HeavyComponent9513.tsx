'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9513<T> = T extends (infer U)[]
  ? DeepReadonlyArray9513<U>
  : T extends object
  ? DeepReadonlyObject9513<T>
  : T;

interface DeepReadonlyArray9513<T> extends ReadonlyArray<DeepReadonly9513<T>> {}

type DeepReadonlyObject9513<T> = {
  readonly [P in keyof T]: DeepReadonly9513<T[P]>;
};

type UnionToIntersection9513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9513<T> = UnionToIntersection9513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9513<T extends unknown[], V> = [...T, V];

type TuplifyUnion9513<T, L = LastOf9513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9513<TuplifyUnion9513<Exclude<T, L>>, L>;

type DeepPartial9513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9513<T[P]> }
  : T;

type Paths9513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9513<K, Paths9513<T[K], Prev9513[D]>> : never }[keyof T]
  : never;

type Prev9513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9513 {
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

type ConfigPaths9513 = Paths9513<NestedConfig9513>;

interface HeavyProps9513 {
  config: DeepPartial9513<NestedConfig9513>;
  path?: ConfigPaths9513;
}

const HeavyComponent9513 = memo(function HeavyComponent9513({ config }: HeavyProps9513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9513.displayName = 'HeavyComponent9513';
export default HeavyComponent9513;

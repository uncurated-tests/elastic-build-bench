'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9135<T> = T extends (infer U)[]
  ? DeepReadonlyArray9135<U>
  : T extends object
  ? DeepReadonlyObject9135<T>
  : T;

interface DeepReadonlyArray9135<T> extends ReadonlyArray<DeepReadonly9135<T>> {}

type DeepReadonlyObject9135<T> = {
  readonly [P in keyof T]: DeepReadonly9135<T[P]>;
};

type UnionToIntersection9135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9135<T> = UnionToIntersection9135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9135<T extends unknown[], V> = [...T, V];

type TuplifyUnion9135<T, L = LastOf9135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9135<TuplifyUnion9135<Exclude<T, L>>, L>;

type DeepPartial9135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9135<T[P]> }
  : T;

type Paths9135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9135<K, Paths9135<T[K], Prev9135[D]>> : never }[keyof T]
  : never;

type Prev9135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9135 {
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

type ConfigPaths9135 = Paths9135<NestedConfig9135>;

interface HeavyProps9135 {
  config: DeepPartial9135<NestedConfig9135>;
  path?: ConfigPaths9135;
}

const HeavyComponent9135 = memo(function HeavyComponent9135({ config }: HeavyProps9135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9135.displayName = 'HeavyComponent9135';
export default HeavyComponent9135;

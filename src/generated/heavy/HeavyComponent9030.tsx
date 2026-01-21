'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9030<T> = T extends (infer U)[]
  ? DeepReadonlyArray9030<U>
  : T extends object
  ? DeepReadonlyObject9030<T>
  : T;

interface DeepReadonlyArray9030<T> extends ReadonlyArray<DeepReadonly9030<T>> {}

type DeepReadonlyObject9030<T> = {
  readonly [P in keyof T]: DeepReadonly9030<T[P]>;
};

type UnionToIntersection9030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9030<T> = UnionToIntersection9030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9030<T extends unknown[], V> = [...T, V];

type TuplifyUnion9030<T, L = LastOf9030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9030<TuplifyUnion9030<Exclude<T, L>>, L>;

type DeepPartial9030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9030<T[P]> }
  : T;

type Paths9030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9030<K, Paths9030<T[K], Prev9030[D]>> : never }[keyof T]
  : never;

type Prev9030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9030 {
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

type ConfigPaths9030 = Paths9030<NestedConfig9030>;

interface HeavyProps9030 {
  config: DeepPartial9030<NestedConfig9030>;
  path?: ConfigPaths9030;
}

const HeavyComponent9030 = memo(function HeavyComponent9030({ config }: HeavyProps9030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9030.displayName = 'HeavyComponent9030';
export default HeavyComponent9030;

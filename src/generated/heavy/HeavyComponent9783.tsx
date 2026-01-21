'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9783<T> = T extends (infer U)[]
  ? DeepReadonlyArray9783<U>
  : T extends object
  ? DeepReadonlyObject9783<T>
  : T;

interface DeepReadonlyArray9783<T> extends ReadonlyArray<DeepReadonly9783<T>> {}

type DeepReadonlyObject9783<T> = {
  readonly [P in keyof T]: DeepReadonly9783<T[P]>;
};

type UnionToIntersection9783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9783<T> = UnionToIntersection9783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9783<T extends unknown[], V> = [...T, V];

type TuplifyUnion9783<T, L = LastOf9783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9783<TuplifyUnion9783<Exclude<T, L>>, L>;

type DeepPartial9783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9783<T[P]> }
  : T;

type Paths9783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9783<K, Paths9783<T[K], Prev9783[D]>> : never }[keyof T]
  : never;

type Prev9783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9783 {
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

type ConfigPaths9783 = Paths9783<NestedConfig9783>;

interface HeavyProps9783 {
  config: DeepPartial9783<NestedConfig9783>;
  path?: ConfigPaths9783;
}

const HeavyComponent9783 = memo(function HeavyComponent9783({ config }: HeavyProps9783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9783.displayName = 'HeavyComponent9783';
export default HeavyComponent9783;

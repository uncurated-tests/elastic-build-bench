'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9381<T> = T extends (infer U)[]
  ? DeepReadonlyArray9381<U>
  : T extends object
  ? DeepReadonlyObject9381<T>
  : T;

interface DeepReadonlyArray9381<T> extends ReadonlyArray<DeepReadonly9381<T>> {}

type DeepReadonlyObject9381<T> = {
  readonly [P in keyof T]: DeepReadonly9381<T[P]>;
};

type UnionToIntersection9381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9381<T> = UnionToIntersection9381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9381<T extends unknown[], V> = [...T, V];

type TuplifyUnion9381<T, L = LastOf9381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9381<TuplifyUnion9381<Exclude<T, L>>, L>;

type DeepPartial9381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9381<T[P]> }
  : T;

type Paths9381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9381<K, Paths9381<T[K], Prev9381[D]>> : never }[keyof T]
  : never;

type Prev9381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9381 {
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

type ConfigPaths9381 = Paths9381<NestedConfig9381>;

interface HeavyProps9381 {
  config: DeepPartial9381<NestedConfig9381>;
  path?: ConfigPaths9381;
}

const HeavyComponent9381 = memo(function HeavyComponent9381({ config }: HeavyProps9381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9381.displayName = 'HeavyComponent9381';
export default HeavyComponent9381;

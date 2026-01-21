'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9353<T> = T extends (infer U)[]
  ? DeepReadonlyArray9353<U>
  : T extends object
  ? DeepReadonlyObject9353<T>
  : T;

interface DeepReadonlyArray9353<T> extends ReadonlyArray<DeepReadonly9353<T>> {}

type DeepReadonlyObject9353<T> = {
  readonly [P in keyof T]: DeepReadonly9353<T[P]>;
};

type UnionToIntersection9353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9353<T> = UnionToIntersection9353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9353<T extends unknown[], V> = [...T, V];

type TuplifyUnion9353<T, L = LastOf9353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9353<TuplifyUnion9353<Exclude<T, L>>, L>;

type DeepPartial9353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9353<T[P]> }
  : T;

type Paths9353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9353<K, Paths9353<T[K], Prev9353[D]>> : never }[keyof T]
  : never;

type Prev9353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9353 {
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

type ConfigPaths9353 = Paths9353<NestedConfig9353>;

interface HeavyProps9353 {
  config: DeepPartial9353<NestedConfig9353>;
  path?: ConfigPaths9353;
}

const HeavyComponent9353 = memo(function HeavyComponent9353({ config }: HeavyProps9353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9353.displayName = 'HeavyComponent9353';
export default HeavyComponent9353;

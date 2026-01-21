'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9784<T> = T extends (infer U)[]
  ? DeepReadonlyArray9784<U>
  : T extends object
  ? DeepReadonlyObject9784<T>
  : T;

interface DeepReadonlyArray9784<T> extends ReadonlyArray<DeepReadonly9784<T>> {}

type DeepReadonlyObject9784<T> = {
  readonly [P in keyof T]: DeepReadonly9784<T[P]>;
};

type UnionToIntersection9784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9784<T> = UnionToIntersection9784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9784<T extends unknown[], V> = [...T, V];

type TuplifyUnion9784<T, L = LastOf9784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9784<TuplifyUnion9784<Exclude<T, L>>, L>;

type DeepPartial9784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9784<T[P]> }
  : T;

type Paths9784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9784<K, Paths9784<T[K], Prev9784[D]>> : never }[keyof T]
  : never;

type Prev9784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9784 {
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

type ConfigPaths9784 = Paths9784<NestedConfig9784>;

interface HeavyProps9784 {
  config: DeepPartial9784<NestedConfig9784>;
  path?: ConfigPaths9784;
}

const HeavyComponent9784 = memo(function HeavyComponent9784({ config }: HeavyProps9784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9784.displayName = 'HeavyComponent9784';
export default HeavyComponent9784;

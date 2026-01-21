'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9000<T> = T extends (infer U)[]
  ? DeepReadonlyArray9000<U>
  : T extends object
  ? DeepReadonlyObject9000<T>
  : T;

interface DeepReadonlyArray9000<T> extends ReadonlyArray<DeepReadonly9000<T>> {}

type DeepReadonlyObject9000<T> = {
  readonly [P in keyof T]: DeepReadonly9000<T[P]>;
};

type UnionToIntersection9000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9000<T> = UnionToIntersection9000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9000<T extends unknown[], V> = [...T, V];

type TuplifyUnion9000<T, L = LastOf9000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9000<TuplifyUnion9000<Exclude<T, L>>, L>;

type DeepPartial9000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9000<T[P]> }
  : T;

type Paths9000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9000<K, Paths9000<T[K], Prev9000[D]>> : never }[keyof T]
  : never;

type Prev9000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9000 {
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

type ConfigPaths9000 = Paths9000<NestedConfig9000>;

interface HeavyProps9000 {
  config: DeepPartial9000<NestedConfig9000>;
  path?: ConfigPaths9000;
}

const HeavyComponent9000 = memo(function HeavyComponent9000({ config }: HeavyProps9000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9000.displayName = 'HeavyComponent9000';
export default HeavyComponent9000;

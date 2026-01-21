'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9150<T> = T extends (infer U)[]
  ? DeepReadonlyArray9150<U>
  : T extends object
  ? DeepReadonlyObject9150<T>
  : T;

interface DeepReadonlyArray9150<T> extends ReadonlyArray<DeepReadonly9150<T>> {}

type DeepReadonlyObject9150<T> = {
  readonly [P in keyof T]: DeepReadonly9150<T[P]>;
};

type UnionToIntersection9150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9150<T> = UnionToIntersection9150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9150<T extends unknown[], V> = [...T, V];

type TuplifyUnion9150<T, L = LastOf9150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9150<TuplifyUnion9150<Exclude<T, L>>, L>;

type DeepPartial9150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9150<T[P]> }
  : T;

type Paths9150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9150<K, Paths9150<T[K], Prev9150[D]>> : never }[keyof T]
  : never;

type Prev9150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9150 {
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

type ConfigPaths9150 = Paths9150<NestedConfig9150>;

interface HeavyProps9150 {
  config: DeepPartial9150<NestedConfig9150>;
  path?: ConfigPaths9150;
}

const HeavyComponent9150 = memo(function HeavyComponent9150({ config }: HeavyProps9150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9150.displayName = 'HeavyComponent9150';
export default HeavyComponent9150;

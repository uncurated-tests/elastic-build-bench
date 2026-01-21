'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9960<T> = T extends (infer U)[]
  ? DeepReadonlyArray9960<U>
  : T extends object
  ? DeepReadonlyObject9960<T>
  : T;

interface DeepReadonlyArray9960<T> extends ReadonlyArray<DeepReadonly9960<T>> {}

type DeepReadonlyObject9960<T> = {
  readonly [P in keyof T]: DeepReadonly9960<T[P]>;
};

type UnionToIntersection9960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9960<T> = UnionToIntersection9960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9960<T extends unknown[], V> = [...T, V];

type TuplifyUnion9960<T, L = LastOf9960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9960<TuplifyUnion9960<Exclude<T, L>>, L>;

type DeepPartial9960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9960<T[P]> }
  : T;

type Paths9960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9960<K, Paths9960<T[K], Prev9960[D]>> : never }[keyof T]
  : never;

type Prev9960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9960 {
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

type ConfigPaths9960 = Paths9960<NestedConfig9960>;

interface HeavyProps9960 {
  config: DeepPartial9960<NestedConfig9960>;
  path?: ConfigPaths9960;
}

const HeavyComponent9960 = memo(function HeavyComponent9960({ config }: HeavyProps9960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9960.displayName = 'HeavyComponent9960';
export default HeavyComponent9960;

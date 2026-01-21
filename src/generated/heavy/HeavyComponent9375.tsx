'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9375<T> = T extends (infer U)[]
  ? DeepReadonlyArray9375<U>
  : T extends object
  ? DeepReadonlyObject9375<T>
  : T;

interface DeepReadonlyArray9375<T> extends ReadonlyArray<DeepReadonly9375<T>> {}

type DeepReadonlyObject9375<T> = {
  readonly [P in keyof T]: DeepReadonly9375<T[P]>;
};

type UnionToIntersection9375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9375<T> = UnionToIntersection9375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9375<T extends unknown[], V> = [...T, V];

type TuplifyUnion9375<T, L = LastOf9375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9375<TuplifyUnion9375<Exclude<T, L>>, L>;

type DeepPartial9375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9375<T[P]> }
  : T;

type Paths9375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9375<K, Paths9375<T[K], Prev9375[D]>> : never }[keyof T]
  : never;

type Prev9375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9375 {
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

type ConfigPaths9375 = Paths9375<NestedConfig9375>;

interface HeavyProps9375 {
  config: DeepPartial9375<NestedConfig9375>;
  path?: ConfigPaths9375;
}

const HeavyComponent9375 = memo(function HeavyComponent9375({ config }: HeavyProps9375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9375.displayName = 'HeavyComponent9375';
export default HeavyComponent9375;

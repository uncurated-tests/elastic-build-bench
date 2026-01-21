'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9296<T> = T extends (infer U)[]
  ? DeepReadonlyArray9296<U>
  : T extends object
  ? DeepReadonlyObject9296<T>
  : T;

interface DeepReadonlyArray9296<T> extends ReadonlyArray<DeepReadonly9296<T>> {}

type DeepReadonlyObject9296<T> = {
  readonly [P in keyof T]: DeepReadonly9296<T[P]>;
};

type UnionToIntersection9296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9296<T> = UnionToIntersection9296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9296<T extends unknown[], V> = [...T, V];

type TuplifyUnion9296<T, L = LastOf9296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9296<TuplifyUnion9296<Exclude<T, L>>, L>;

type DeepPartial9296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9296<T[P]> }
  : T;

type Paths9296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9296<K, Paths9296<T[K], Prev9296[D]>> : never }[keyof T]
  : never;

type Prev9296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9296 {
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

type ConfigPaths9296 = Paths9296<NestedConfig9296>;

interface HeavyProps9296 {
  config: DeepPartial9296<NestedConfig9296>;
  path?: ConfigPaths9296;
}

const HeavyComponent9296 = memo(function HeavyComponent9296({ config }: HeavyProps9296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9296.displayName = 'HeavyComponent9296';
export default HeavyComponent9296;

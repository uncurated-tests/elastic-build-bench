'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9287<T> = T extends (infer U)[]
  ? DeepReadonlyArray9287<U>
  : T extends object
  ? DeepReadonlyObject9287<T>
  : T;

interface DeepReadonlyArray9287<T> extends ReadonlyArray<DeepReadonly9287<T>> {}

type DeepReadonlyObject9287<T> = {
  readonly [P in keyof T]: DeepReadonly9287<T[P]>;
};

type UnionToIntersection9287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9287<T> = UnionToIntersection9287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9287<T extends unknown[], V> = [...T, V];

type TuplifyUnion9287<T, L = LastOf9287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9287<TuplifyUnion9287<Exclude<T, L>>, L>;

type DeepPartial9287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9287<T[P]> }
  : T;

type Paths9287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9287<K, Paths9287<T[K], Prev9287[D]>> : never }[keyof T]
  : never;

type Prev9287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9287 {
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

type ConfigPaths9287 = Paths9287<NestedConfig9287>;

interface HeavyProps9287 {
  config: DeepPartial9287<NestedConfig9287>;
  path?: ConfigPaths9287;
}

const HeavyComponent9287 = memo(function HeavyComponent9287({ config }: HeavyProps9287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9287.displayName = 'HeavyComponent9287';
export default HeavyComponent9287;

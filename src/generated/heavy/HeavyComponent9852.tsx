'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9852<T> = T extends (infer U)[]
  ? DeepReadonlyArray9852<U>
  : T extends object
  ? DeepReadonlyObject9852<T>
  : T;

interface DeepReadonlyArray9852<T> extends ReadonlyArray<DeepReadonly9852<T>> {}

type DeepReadonlyObject9852<T> = {
  readonly [P in keyof T]: DeepReadonly9852<T[P]>;
};

type UnionToIntersection9852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9852<T> = UnionToIntersection9852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9852<T extends unknown[], V> = [...T, V];

type TuplifyUnion9852<T, L = LastOf9852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9852<TuplifyUnion9852<Exclude<T, L>>, L>;

type DeepPartial9852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9852<T[P]> }
  : T;

type Paths9852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9852<K, Paths9852<T[K], Prev9852[D]>> : never }[keyof T]
  : never;

type Prev9852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9852 {
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

type ConfigPaths9852 = Paths9852<NestedConfig9852>;

interface HeavyProps9852 {
  config: DeepPartial9852<NestedConfig9852>;
  path?: ConfigPaths9852;
}

const HeavyComponent9852 = memo(function HeavyComponent9852({ config }: HeavyProps9852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9852.displayName = 'HeavyComponent9852';
export default HeavyComponent9852;

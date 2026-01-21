'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9250<T> = T extends (infer U)[]
  ? DeepReadonlyArray9250<U>
  : T extends object
  ? DeepReadonlyObject9250<T>
  : T;

interface DeepReadonlyArray9250<T> extends ReadonlyArray<DeepReadonly9250<T>> {}

type DeepReadonlyObject9250<T> = {
  readonly [P in keyof T]: DeepReadonly9250<T[P]>;
};

type UnionToIntersection9250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9250<T> = UnionToIntersection9250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9250<T extends unknown[], V> = [...T, V];

type TuplifyUnion9250<T, L = LastOf9250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9250<TuplifyUnion9250<Exclude<T, L>>, L>;

type DeepPartial9250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9250<T[P]> }
  : T;

type Paths9250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9250<K, Paths9250<T[K], Prev9250[D]>> : never }[keyof T]
  : never;

type Prev9250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9250 {
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

type ConfigPaths9250 = Paths9250<NestedConfig9250>;

interface HeavyProps9250 {
  config: DeepPartial9250<NestedConfig9250>;
  path?: ConfigPaths9250;
}

const HeavyComponent9250 = memo(function HeavyComponent9250({ config }: HeavyProps9250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9250.displayName = 'HeavyComponent9250';
export default HeavyComponent9250;

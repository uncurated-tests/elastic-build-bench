'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9953<T> = T extends (infer U)[]
  ? DeepReadonlyArray9953<U>
  : T extends object
  ? DeepReadonlyObject9953<T>
  : T;

interface DeepReadonlyArray9953<T> extends ReadonlyArray<DeepReadonly9953<T>> {}

type DeepReadonlyObject9953<T> = {
  readonly [P in keyof T]: DeepReadonly9953<T[P]>;
};

type UnionToIntersection9953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9953<T> = UnionToIntersection9953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9953<T extends unknown[], V> = [...T, V];

type TuplifyUnion9953<T, L = LastOf9953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9953<TuplifyUnion9953<Exclude<T, L>>, L>;

type DeepPartial9953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9953<T[P]> }
  : T;

type Paths9953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9953<K, Paths9953<T[K], Prev9953[D]>> : never }[keyof T]
  : never;

type Prev9953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9953 {
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

type ConfigPaths9953 = Paths9953<NestedConfig9953>;

interface HeavyProps9953 {
  config: DeepPartial9953<NestedConfig9953>;
  path?: ConfigPaths9953;
}

const HeavyComponent9953 = memo(function HeavyComponent9953({ config }: HeavyProps9953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9953.displayName = 'HeavyComponent9953';
export default HeavyComponent9953;

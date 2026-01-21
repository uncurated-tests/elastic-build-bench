'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9565<T> = T extends (infer U)[]
  ? DeepReadonlyArray9565<U>
  : T extends object
  ? DeepReadonlyObject9565<T>
  : T;

interface DeepReadonlyArray9565<T> extends ReadonlyArray<DeepReadonly9565<T>> {}

type DeepReadonlyObject9565<T> = {
  readonly [P in keyof T]: DeepReadonly9565<T[P]>;
};

type UnionToIntersection9565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9565<T> = UnionToIntersection9565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9565<T extends unknown[], V> = [...T, V];

type TuplifyUnion9565<T, L = LastOf9565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9565<TuplifyUnion9565<Exclude<T, L>>, L>;

type DeepPartial9565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9565<T[P]> }
  : T;

type Paths9565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9565<K, Paths9565<T[K], Prev9565[D]>> : never }[keyof T]
  : never;

type Prev9565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9565 {
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

type ConfigPaths9565 = Paths9565<NestedConfig9565>;

interface HeavyProps9565 {
  config: DeepPartial9565<NestedConfig9565>;
  path?: ConfigPaths9565;
}

const HeavyComponent9565 = memo(function HeavyComponent9565({ config }: HeavyProps9565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9565.displayName = 'HeavyComponent9565';
export default HeavyComponent9565;

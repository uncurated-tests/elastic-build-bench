'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9446<T> = T extends (infer U)[]
  ? DeepReadonlyArray9446<U>
  : T extends object
  ? DeepReadonlyObject9446<T>
  : T;

interface DeepReadonlyArray9446<T> extends ReadonlyArray<DeepReadonly9446<T>> {}

type DeepReadonlyObject9446<T> = {
  readonly [P in keyof T]: DeepReadonly9446<T[P]>;
};

type UnionToIntersection9446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9446<T> = UnionToIntersection9446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9446<T extends unknown[], V> = [...T, V];

type TuplifyUnion9446<T, L = LastOf9446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9446<TuplifyUnion9446<Exclude<T, L>>, L>;

type DeepPartial9446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9446<T[P]> }
  : T;

type Paths9446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9446<K, Paths9446<T[K], Prev9446[D]>> : never }[keyof T]
  : never;

type Prev9446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9446 {
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

type ConfigPaths9446 = Paths9446<NestedConfig9446>;

interface HeavyProps9446 {
  config: DeepPartial9446<NestedConfig9446>;
  path?: ConfigPaths9446;
}

const HeavyComponent9446 = memo(function HeavyComponent9446({ config }: HeavyProps9446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9446.displayName = 'HeavyComponent9446';
export default HeavyComponent9446;

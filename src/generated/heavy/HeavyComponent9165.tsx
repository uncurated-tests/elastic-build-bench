'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9165<T> = T extends (infer U)[]
  ? DeepReadonlyArray9165<U>
  : T extends object
  ? DeepReadonlyObject9165<T>
  : T;

interface DeepReadonlyArray9165<T> extends ReadonlyArray<DeepReadonly9165<T>> {}

type DeepReadonlyObject9165<T> = {
  readonly [P in keyof T]: DeepReadonly9165<T[P]>;
};

type UnionToIntersection9165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9165<T> = UnionToIntersection9165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9165<T extends unknown[], V> = [...T, V];

type TuplifyUnion9165<T, L = LastOf9165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9165<TuplifyUnion9165<Exclude<T, L>>, L>;

type DeepPartial9165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9165<T[P]> }
  : T;

type Paths9165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9165<K, Paths9165<T[K], Prev9165[D]>> : never }[keyof T]
  : never;

type Prev9165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9165 {
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

type ConfigPaths9165 = Paths9165<NestedConfig9165>;

interface HeavyProps9165 {
  config: DeepPartial9165<NestedConfig9165>;
  path?: ConfigPaths9165;
}

const HeavyComponent9165 = memo(function HeavyComponent9165({ config }: HeavyProps9165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9165.displayName = 'HeavyComponent9165';
export default HeavyComponent9165;

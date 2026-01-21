'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9020<T> = T extends (infer U)[]
  ? DeepReadonlyArray9020<U>
  : T extends object
  ? DeepReadonlyObject9020<T>
  : T;

interface DeepReadonlyArray9020<T> extends ReadonlyArray<DeepReadonly9020<T>> {}

type DeepReadonlyObject9020<T> = {
  readonly [P in keyof T]: DeepReadonly9020<T[P]>;
};

type UnionToIntersection9020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9020<T> = UnionToIntersection9020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9020<T extends unknown[], V> = [...T, V];

type TuplifyUnion9020<T, L = LastOf9020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9020<TuplifyUnion9020<Exclude<T, L>>, L>;

type DeepPartial9020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9020<T[P]> }
  : T;

type Paths9020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9020<K, Paths9020<T[K], Prev9020[D]>> : never }[keyof T]
  : never;

type Prev9020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9020 {
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

type ConfigPaths9020 = Paths9020<NestedConfig9020>;

interface HeavyProps9020 {
  config: DeepPartial9020<NestedConfig9020>;
  path?: ConfigPaths9020;
}

const HeavyComponent9020 = memo(function HeavyComponent9020({ config }: HeavyProps9020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9020.displayName = 'HeavyComponent9020';
export default HeavyComponent9020;

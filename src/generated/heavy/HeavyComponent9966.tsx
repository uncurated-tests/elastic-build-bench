'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9966<T> = T extends (infer U)[]
  ? DeepReadonlyArray9966<U>
  : T extends object
  ? DeepReadonlyObject9966<T>
  : T;

interface DeepReadonlyArray9966<T> extends ReadonlyArray<DeepReadonly9966<T>> {}

type DeepReadonlyObject9966<T> = {
  readonly [P in keyof T]: DeepReadonly9966<T[P]>;
};

type UnionToIntersection9966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9966<T> = UnionToIntersection9966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9966<T extends unknown[], V> = [...T, V];

type TuplifyUnion9966<T, L = LastOf9966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9966<TuplifyUnion9966<Exclude<T, L>>, L>;

type DeepPartial9966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9966<T[P]> }
  : T;

type Paths9966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9966<K, Paths9966<T[K], Prev9966[D]>> : never }[keyof T]
  : never;

type Prev9966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9966 {
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

type ConfigPaths9966 = Paths9966<NestedConfig9966>;

interface HeavyProps9966 {
  config: DeepPartial9966<NestedConfig9966>;
  path?: ConfigPaths9966;
}

const HeavyComponent9966 = memo(function HeavyComponent9966({ config }: HeavyProps9966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9966.displayName = 'HeavyComponent9966';
export default HeavyComponent9966;

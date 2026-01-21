'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9111<T> = T extends (infer U)[]
  ? DeepReadonlyArray9111<U>
  : T extends object
  ? DeepReadonlyObject9111<T>
  : T;

interface DeepReadonlyArray9111<T> extends ReadonlyArray<DeepReadonly9111<T>> {}

type DeepReadonlyObject9111<T> = {
  readonly [P in keyof T]: DeepReadonly9111<T[P]>;
};

type UnionToIntersection9111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9111<T> = UnionToIntersection9111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9111<T extends unknown[], V> = [...T, V];

type TuplifyUnion9111<T, L = LastOf9111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9111<TuplifyUnion9111<Exclude<T, L>>, L>;

type DeepPartial9111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9111<T[P]> }
  : T;

type Paths9111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9111<K, Paths9111<T[K], Prev9111[D]>> : never }[keyof T]
  : never;

type Prev9111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9111 {
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

type ConfigPaths9111 = Paths9111<NestedConfig9111>;

interface HeavyProps9111 {
  config: DeepPartial9111<NestedConfig9111>;
  path?: ConfigPaths9111;
}

const HeavyComponent9111 = memo(function HeavyComponent9111({ config }: HeavyProps9111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9111.displayName = 'HeavyComponent9111';
export default HeavyComponent9111;

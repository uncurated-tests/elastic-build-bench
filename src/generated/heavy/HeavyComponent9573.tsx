'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9573<T> = T extends (infer U)[]
  ? DeepReadonlyArray9573<U>
  : T extends object
  ? DeepReadonlyObject9573<T>
  : T;

interface DeepReadonlyArray9573<T> extends ReadonlyArray<DeepReadonly9573<T>> {}

type DeepReadonlyObject9573<T> = {
  readonly [P in keyof T]: DeepReadonly9573<T[P]>;
};

type UnionToIntersection9573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9573<T> = UnionToIntersection9573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9573<T extends unknown[], V> = [...T, V];

type TuplifyUnion9573<T, L = LastOf9573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9573<TuplifyUnion9573<Exclude<T, L>>, L>;

type DeepPartial9573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9573<T[P]> }
  : T;

type Paths9573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9573<K, Paths9573<T[K], Prev9573[D]>> : never }[keyof T]
  : never;

type Prev9573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9573 {
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

type ConfigPaths9573 = Paths9573<NestedConfig9573>;

interface HeavyProps9573 {
  config: DeepPartial9573<NestedConfig9573>;
  path?: ConfigPaths9573;
}

const HeavyComponent9573 = memo(function HeavyComponent9573({ config }: HeavyProps9573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9573.displayName = 'HeavyComponent9573';
export default HeavyComponent9573;

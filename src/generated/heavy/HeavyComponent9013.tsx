'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9013<T> = T extends (infer U)[]
  ? DeepReadonlyArray9013<U>
  : T extends object
  ? DeepReadonlyObject9013<T>
  : T;

interface DeepReadonlyArray9013<T> extends ReadonlyArray<DeepReadonly9013<T>> {}

type DeepReadonlyObject9013<T> = {
  readonly [P in keyof T]: DeepReadonly9013<T[P]>;
};

type UnionToIntersection9013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9013<T> = UnionToIntersection9013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9013<T extends unknown[], V> = [...T, V];

type TuplifyUnion9013<T, L = LastOf9013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9013<TuplifyUnion9013<Exclude<T, L>>, L>;

type DeepPartial9013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9013<T[P]> }
  : T;

type Paths9013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9013<K, Paths9013<T[K], Prev9013[D]>> : never }[keyof T]
  : never;

type Prev9013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9013 {
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

type ConfigPaths9013 = Paths9013<NestedConfig9013>;

interface HeavyProps9013 {
  config: DeepPartial9013<NestedConfig9013>;
  path?: ConfigPaths9013;
}

const HeavyComponent9013 = memo(function HeavyComponent9013({ config }: HeavyProps9013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9013.displayName = 'HeavyComponent9013';
export default HeavyComponent9013;

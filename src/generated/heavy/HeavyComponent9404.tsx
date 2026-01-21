'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9404<T> = T extends (infer U)[]
  ? DeepReadonlyArray9404<U>
  : T extends object
  ? DeepReadonlyObject9404<T>
  : T;

interface DeepReadonlyArray9404<T> extends ReadonlyArray<DeepReadonly9404<T>> {}

type DeepReadonlyObject9404<T> = {
  readonly [P in keyof T]: DeepReadonly9404<T[P]>;
};

type UnionToIntersection9404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9404<T> = UnionToIntersection9404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9404<T extends unknown[], V> = [...T, V];

type TuplifyUnion9404<T, L = LastOf9404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9404<TuplifyUnion9404<Exclude<T, L>>, L>;

type DeepPartial9404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9404<T[P]> }
  : T;

type Paths9404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9404<K, Paths9404<T[K], Prev9404[D]>> : never }[keyof T]
  : never;

type Prev9404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9404 {
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

type ConfigPaths9404 = Paths9404<NestedConfig9404>;

interface HeavyProps9404 {
  config: DeepPartial9404<NestedConfig9404>;
  path?: ConfigPaths9404;
}

const HeavyComponent9404 = memo(function HeavyComponent9404({ config }: HeavyProps9404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9404.displayName = 'HeavyComponent9404';
export default HeavyComponent9404;

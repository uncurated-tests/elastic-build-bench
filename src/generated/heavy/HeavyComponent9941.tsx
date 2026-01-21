'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9941<T> = T extends (infer U)[]
  ? DeepReadonlyArray9941<U>
  : T extends object
  ? DeepReadonlyObject9941<T>
  : T;

interface DeepReadonlyArray9941<T> extends ReadonlyArray<DeepReadonly9941<T>> {}

type DeepReadonlyObject9941<T> = {
  readonly [P in keyof T]: DeepReadonly9941<T[P]>;
};

type UnionToIntersection9941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9941<T> = UnionToIntersection9941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9941<T extends unknown[], V> = [...T, V];

type TuplifyUnion9941<T, L = LastOf9941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9941<TuplifyUnion9941<Exclude<T, L>>, L>;

type DeepPartial9941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9941<T[P]> }
  : T;

type Paths9941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9941<K, Paths9941<T[K], Prev9941[D]>> : never }[keyof T]
  : never;

type Prev9941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9941 {
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

type ConfigPaths9941 = Paths9941<NestedConfig9941>;

interface HeavyProps9941 {
  config: DeepPartial9941<NestedConfig9941>;
  path?: ConfigPaths9941;
}

const HeavyComponent9941 = memo(function HeavyComponent9941({ config }: HeavyProps9941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9941.displayName = 'HeavyComponent9941';
export default HeavyComponent9941;

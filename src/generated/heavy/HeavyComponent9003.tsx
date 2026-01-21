'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9003<T> = T extends (infer U)[]
  ? DeepReadonlyArray9003<U>
  : T extends object
  ? DeepReadonlyObject9003<T>
  : T;

interface DeepReadonlyArray9003<T> extends ReadonlyArray<DeepReadonly9003<T>> {}

type DeepReadonlyObject9003<T> = {
  readonly [P in keyof T]: DeepReadonly9003<T[P]>;
};

type UnionToIntersection9003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9003<T> = UnionToIntersection9003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9003<T extends unknown[], V> = [...T, V];

type TuplifyUnion9003<T, L = LastOf9003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9003<TuplifyUnion9003<Exclude<T, L>>, L>;

type DeepPartial9003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9003<T[P]> }
  : T;

type Paths9003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9003<K, Paths9003<T[K], Prev9003[D]>> : never }[keyof T]
  : never;

type Prev9003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9003 {
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

type ConfigPaths9003 = Paths9003<NestedConfig9003>;

interface HeavyProps9003 {
  config: DeepPartial9003<NestedConfig9003>;
  path?: ConfigPaths9003;
}

const HeavyComponent9003 = memo(function HeavyComponent9003({ config }: HeavyProps9003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9003.displayName = 'HeavyComponent9003';
export default HeavyComponent9003;

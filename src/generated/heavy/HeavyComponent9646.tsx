'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9646<T> = T extends (infer U)[]
  ? DeepReadonlyArray9646<U>
  : T extends object
  ? DeepReadonlyObject9646<T>
  : T;

interface DeepReadonlyArray9646<T> extends ReadonlyArray<DeepReadonly9646<T>> {}

type DeepReadonlyObject9646<T> = {
  readonly [P in keyof T]: DeepReadonly9646<T[P]>;
};

type UnionToIntersection9646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9646<T> = UnionToIntersection9646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9646<T extends unknown[], V> = [...T, V];

type TuplifyUnion9646<T, L = LastOf9646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9646<TuplifyUnion9646<Exclude<T, L>>, L>;

type DeepPartial9646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9646<T[P]> }
  : T;

type Paths9646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9646<K, Paths9646<T[K], Prev9646[D]>> : never }[keyof T]
  : never;

type Prev9646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9646 {
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

type ConfigPaths9646 = Paths9646<NestedConfig9646>;

interface HeavyProps9646 {
  config: DeepPartial9646<NestedConfig9646>;
  path?: ConfigPaths9646;
}

const HeavyComponent9646 = memo(function HeavyComponent9646({ config }: HeavyProps9646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9646.displayName = 'HeavyComponent9646';
export default HeavyComponent9646;

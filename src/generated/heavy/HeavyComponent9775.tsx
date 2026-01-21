'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9775<T> = T extends (infer U)[]
  ? DeepReadonlyArray9775<U>
  : T extends object
  ? DeepReadonlyObject9775<T>
  : T;

interface DeepReadonlyArray9775<T> extends ReadonlyArray<DeepReadonly9775<T>> {}

type DeepReadonlyObject9775<T> = {
  readonly [P in keyof T]: DeepReadonly9775<T[P]>;
};

type UnionToIntersection9775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9775<T> = UnionToIntersection9775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9775<T extends unknown[], V> = [...T, V];

type TuplifyUnion9775<T, L = LastOf9775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9775<TuplifyUnion9775<Exclude<T, L>>, L>;

type DeepPartial9775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9775<T[P]> }
  : T;

type Paths9775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9775<K, Paths9775<T[K], Prev9775[D]>> : never }[keyof T]
  : never;

type Prev9775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9775 {
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

type ConfigPaths9775 = Paths9775<NestedConfig9775>;

interface HeavyProps9775 {
  config: DeepPartial9775<NestedConfig9775>;
  path?: ConfigPaths9775;
}

const HeavyComponent9775 = memo(function HeavyComponent9775({ config }: HeavyProps9775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9775.displayName = 'HeavyComponent9775';
export default HeavyComponent9775;

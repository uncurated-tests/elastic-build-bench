'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9725<T> = T extends (infer U)[]
  ? DeepReadonlyArray9725<U>
  : T extends object
  ? DeepReadonlyObject9725<T>
  : T;

interface DeepReadonlyArray9725<T> extends ReadonlyArray<DeepReadonly9725<T>> {}

type DeepReadonlyObject9725<T> = {
  readonly [P in keyof T]: DeepReadonly9725<T[P]>;
};

type UnionToIntersection9725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9725<T> = UnionToIntersection9725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9725<T extends unknown[], V> = [...T, V];

type TuplifyUnion9725<T, L = LastOf9725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9725<TuplifyUnion9725<Exclude<T, L>>, L>;

type DeepPartial9725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9725<T[P]> }
  : T;

type Paths9725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9725<K, Paths9725<T[K], Prev9725[D]>> : never }[keyof T]
  : never;

type Prev9725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9725 {
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

type ConfigPaths9725 = Paths9725<NestedConfig9725>;

interface HeavyProps9725 {
  config: DeepPartial9725<NestedConfig9725>;
  path?: ConfigPaths9725;
}

const HeavyComponent9725 = memo(function HeavyComponent9725({ config }: HeavyProps9725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9725.displayName = 'HeavyComponent9725';
export default HeavyComponent9725;

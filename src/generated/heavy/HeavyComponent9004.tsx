'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9004<T> = T extends (infer U)[]
  ? DeepReadonlyArray9004<U>
  : T extends object
  ? DeepReadonlyObject9004<T>
  : T;

interface DeepReadonlyArray9004<T> extends ReadonlyArray<DeepReadonly9004<T>> {}

type DeepReadonlyObject9004<T> = {
  readonly [P in keyof T]: DeepReadonly9004<T[P]>;
};

type UnionToIntersection9004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9004<T> = UnionToIntersection9004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9004<T extends unknown[], V> = [...T, V];

type TuplifyUnion9004<T, L = LastOf9004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9004<TuplifyUnion9004<Exclude<T, L>>, L>;

type DeepPartial9004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9004<T[P]> }
  : T;

type Paths9004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9004<K, Paths9004<T[K], Prev9004[D]>> : never }[keyof T]
  : never;

type Prev9004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9004 {
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

type ConfigPaths9004 = Paths9004<NestedConfig9004>;

interface HeavyProps9004 {
  config: DeepPartial9004<NestedConfig9004>;
  path?: ConfigPaths9004;
}

const HeavyComponent9004 = memo(function HeavyComponent9004({ config }: HeavyProps9004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9004.displayName = 'HeavyComponent9004';
export default HeavyComponent9004;

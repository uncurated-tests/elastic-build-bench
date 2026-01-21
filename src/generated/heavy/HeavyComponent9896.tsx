'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9896<T> = T extends (infer U)[]
  ? DeepReadonlyArray9896<U>
  : T extends object
  ? DeepReadonlyObject9896<T>
  : T;

interface DeepReadonlyArray9896<T> extends ReadonlyArray<DeepReadonly9896<T>> {}

type DeepReadonlyObject9896<T> = {
  readonly [P in keyof T]: DeepReadonly9896<T[P]>;
};

type UnionToIntersection9896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9896<T> = UnionToIntersection9896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9896<T extends unknown[], V> = [...T, V];

type TuplifyUnion9896<T, L = LastOf9896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9896<TuplifyUnion9896<Exclude<T, L>>, L>;

type DeepPartial9896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9896<T[P]> }
  : T;

type Paths9896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9896<K, Paths9896<T[K], Prev9896[D]>> : never }[keyof T]
  : never;

type Prev9896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9896 {
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

type ConfigPaths9896 = Paths9896<NestedConfig9896>;

interface HeavyProps9896 {
  config: DeepPartial9896<NestedConfig9896>;
  path?: ConfigPaths9896;
}

const HeavyComponent9896 = memo(function HeavyComponent9896({ config }: HeavyProps9896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9896.displayName = 'HeavyComponent9896';
export default HeavyComponent9896;

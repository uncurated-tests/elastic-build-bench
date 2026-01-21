'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9073<T> = T extends (infer U)[]
  ? DeepReadonlyArray9073<U>
  : T extends object
  ? DeepReadonlyObject9073<T>
  : T;

interface DeepReadonlyArray9073<T> extends ReadonlyArray<DeepReadonly9073<T>> {}

type DeepReadonlyObject9073<T> = {
  readonly [P in keyof T]: DeepReadonly9073<T[P]>;
};

type UnionToIntersection9073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9073<T> = UnionToIntersection9073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9073<T extends unknown[], V> = [...T, V];

type TuplifyUnion9073<T, L = LastOf9073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9073<TuplifyUnion9073<Exclude<T, L>>, L>;

type DeepPartial9073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9073<T[P]> }
  : T;

type Paths9073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9073<K, Paths9073<T[K], Prev9073[D]>> : never }[keyof T]
  : never;

type Prev9073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9073 {
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

type ConfigPaths9073 = Paths9073<NestedConfig9073>;

interface HeavyProps9073 {
  config: DeepPartial9073<NestedConfig9073>;
  path?: ConfigPaths9073;
}

const HeavyComponent9073 = memo(function HeavyComponent9073({ config }: HeavyProps9073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9073.displayName = 'HeavyComponent9073';
export default HeavyComponent9073;

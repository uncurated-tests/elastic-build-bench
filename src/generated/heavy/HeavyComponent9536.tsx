'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9536<T> = T extends (infer U)[]
  ? DeepReadonlyArray9536<U>
  : T extends object
  ? DeepReadonlyObject9536<T>
  : T;

interface DeepReadonlyArray9536<T> extends ReadonlyArray<DeepReadonly9536<T>> {}

type DeepReadonlyObject9536<T> = {
  readonly [P in keyof T]: DeepReadonly9536<T[P]>;
};

type UnionToIntersection9536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9536<T> = UnionToIntersection9536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9536<T extends unknown[], V> = [...T, V];

type TuplifyUnion9536<T, L = LastOf9536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9536<TuplifyUnion9536<Exclude<T, L>>, L>;

type DeepPartial9536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9536<T[P]> }
  : T;

type Paths9536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9536<K, Paths9536<T[K], Prev9536[D]>> : never }[keyof T]
  : never;

type Prev9536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9536 {
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

type ConfigPaths9536 = Paths9536<NestedConfig9536>;

interface HeavyProps9536 {
  config: DeepPartial9536<NestedConfig9536>;
  path?: ConfigPaths9536;
}

const HeavyComponent9536 = memo(function HeavyComponent9536({ config }: HeavyProps9536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9536.displayName = 'HeavyComponent9536';
export default HeavyComponent9536;

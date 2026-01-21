'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9145<T> = T extends (infer U)[]
  ? DeepReadonlyArray9145<U>
  : T extends object
  ? DeepReadonlyObject9145<T>
  : T;

interface DeepReadonlyArray9145<T> extends ReadonlyArray<DeepReadonly9145<T>> {}

type DeepReadonlyObject9145<T> = {
  readonly [P in keyof T]: DeepReadonly9145<T[P]>;
};

type UnionToIntersection9145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9145<T> = UnionToIntersection9145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9145<T extends unknown[], V> = [...T, V];

type TuplifyUnion9145<T, L = LastOf9145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9145<TuplifyUnion9145<Exclude<T, L>>, L>;

type DeepPartial9145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9145<T[P]> }
  : T;

type Paths9145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9145<K, Paths9145<T[K], Prev9145[D]>> : never }[keyof T]
  : never;

type Prev9145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9145 {
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

type ConfigPaths9145 = Paths9145<NestedConfig9145>;

interface HeavyProps9145 {
  config: DeepPartial9145<NestedConfig9145>;
  path?: ConfigPaths9145;
}

const HeavyComponent9145 = memo(function HeavyComponent9145({ config }: HeavyProps9145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9145.displayName = 'HeavyComponent9145';
export default HeavyComponent9145;

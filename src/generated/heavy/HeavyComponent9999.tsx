'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9999<T> = T extends (infer U)[]
  ? DeepReadonlyArray9999<U>
  : T extends object
  ? DeepReadonlyObject9999<T>
  : T;

interface DeepReadonlyArray9999<T> extends ReadonlyArray<DeepReadonly9999<T>> {}

type DeepReadonlyObject9999<T> = {
  readonly [P in keyof T]: DeepReadonly9999<T[P]>;
};

type UnionToIntersection9999<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9999<T> = UnionToIntersection9999<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9999<T extends unknown[], V> = [...T, V];

type TuplifyUnion9999<T, L = LastOf9999<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9999<TuplifyUnion9999<Exclude<T, L>>, L>;

type DeepPartial9999<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9999<T[P]> }
  : T;

type Paths9999<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9999<K, Paths9999<T[K], Prev9999[D]>> : never }[keyof T]
  : never;

type Prev9999 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9999<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9999 {
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

type ConfigPaths9999 = Paths9999<NestedConfig9999>;

interface HeavyProps9999 {
  config: DeepPartial9999<NestedConfig9999>;
  path?: ConfigPaths9999;
}

const HeavyComponent9999 = memo(function HeavyComponent9999({ config }: HeavyProps9999) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9999) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9999 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9999: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9999.displayName = 'HeavyComponent9999';
export default HeavyComponent9999;

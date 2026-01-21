'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly999<T> = T extends (infer U)[]
  ? DeepReadonlyArray999<U>
  : T extends object
  ? DeepReadonlyObject999<T>
  : T;

interface DeepReadonlyArray999<T> extends ReadonlyArray<DeepReadonly999<T>> {}

type DeepReadonlyObject999<T> = {
  readonly [P in keyof T]: DeepReadonly999<T[P]>;
};

type UnionToIntersection999<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf999<T> = UnionToIntersection999<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push999<T extends unknown[], V> = [...T, V];

type TuplifyUnion999<T, L = LastOf999<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push999<TuplifyUnion999<Exclude<T, L>>, L>;

type DeepPartial999<T> = T extends object
  ? { [P in keyof T]?: DeepPartial999<T[P]> }
  : T;

type Paths999<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join999<K, Paths999<T[K], Prev999[D]>> : never }[keyof T]
  : never;

type Prev999 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join999<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig999 {
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

type ConfigPaths999 = Paths999<NestedConfig999>;

interface HeavyProps999 {
  config: DeepPartial999<NestedConfig999>;
  path?: ConfigPaths999;
}

const HeavyComponent999 = memo(function HeavyComponent999({ config }: HeavyProps999) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 999) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-999 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H999: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent999.displayName = 'HeavyComponent999';
export default HeavyComponent999;

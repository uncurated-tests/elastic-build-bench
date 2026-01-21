'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14999<T> = T extends (infer U)[]
  ? DeepReadonlyArray14999<U>
  : T extends object
  ? DeepReadonlyObject14999<T>
  : T;

interface DeepReadonlyArray14999<T> extends ReadonlyArray<DeepReadonly14999<T>> {}

type DeepReadonlyObject14999<T> = {
  readonly [P in keyof T]: DeepReadonly14999<T[P]>;
};

type UnionToIntersection14999<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14999<T> = UnionToIntersection14999<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14999<T extends unknown[], V> = [...T, V];

type TuplifyUnion14999<T, L = LastOf14999<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14999<TuplifyUnion14999<Exclude<T, L>>, L>;

type DeepPartial14999<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14999<T[P]> }
  : T;

type Paths14999<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14999<K, Paths14999<T[K], Prev14999[D]>> : never }[keyof T]
  : never;

type Prev14999 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14999<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14999 {
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

type ConfigPaths14999 = Paths14999<NestedConfig14999>;

interface HeavyProps14999 {
  config: DeepPartial14999<NestedConfig14999>;
  path?: ConfigPaths14999;
}

const HeavyComponent14999 = memo(function HeavyComponent14999({ config }: HeavyProps14999) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14999) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14999 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14999: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14999.displayName = 'HeavyComponent14999';
export default HeavyComponent14999;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14424<T> = T extends (infer U)[]
  ? DeepReadonlyArray14424<U>
  : T extends object
  ? DeepReadonlyObject14424<T>
  : T;

interface DeepReadonlyArray14424<T> extends ReadonlyArray<DeepReadonly14424<T>> {}

type DeepReadonlyObject14424<T> = {
  readonly [P in keyof T]: DeepReadonly14424<T[P]>;
};

type UnionToIntersection14424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14424<T> = UnionToIntersection14424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14424<T extends unknown[], V> = [...T, V];

type TuplifyUnion14424<T, L = LastOf14424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14424<TuplifyUnion14424<Exclude<T, L>>, L>;

type DeepPartial14424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14424<T[P]> }
  : T;

type Paths14424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14424<K, Paths14424<T[K], Prev14424[D]>> : never }[keyof T]
  : never;

type Prev14424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14424 {
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

type ConfigPaths14424 = Paths14424<NestedConfig14424>;

interface HeavyProps14424 {
  config: DeepPartial14424<NestedConfig14424>;
  path?: ConfigPaths14424;
}

const HeavyComponent14424 = memo(function HeavyComponent14424({ config }: HeavyProps14424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14424.displayName = 'HeavyComponent14424';
export default HeavyComponent14424;

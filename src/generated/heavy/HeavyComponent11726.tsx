'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11726<T> = T extends (infer U)[]
  ? DeepReadonlyArray11726<U>
  : T extends object
  ? DeepReadonlyObject11726<T>
  : T;

interface DeepReadonlyArray11726<T> extends ReadonlyArray<DeepReadonly11726<T>> {}

type DeepReadonlyObject11726<T> = {
  readonly [P in keyof T]: DeepReadonly11726<T[P]>;
};

type UnionToIntersection11726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11726<T> = UnionToIntersection11726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11726<T extends unknown[], V> = [...T, V];

type TuplifyUnion11726<T, L = LastOf11726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11726<TuplifyUnion11726<Exclude<T, L>>, L>;

type DeepPartial11726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11726<T[P]> }
  : T;

type Paths11726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11726<K, Paths11726<T[K], Prev11726[D]>> : never }[keyof T]
  : never;

type Prev11726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11726 {
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

type ConfigPaths11726 = Paths11726<NestedConfig11726>;

interface HeavyProps11726 {
  config: DeepPartial11726<NestedConfig11726>;
  path?: ConfigPaths11726;
}

const HeavyComponent11726 = memo(function HeavyComponent11726({ config }: HeavyProps11726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11726.displayName = 'HeavyComponent11726';
export default HeavyComponent11726;

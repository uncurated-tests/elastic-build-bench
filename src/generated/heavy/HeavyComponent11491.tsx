'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11491<T> = T extends (infer U)[]
  ? DeepReadonlyArray11491<U>
  : T extends object
  ? DeepReadonlyObject11491<T>
  : T;

interface DeepReadonlyArray11491<T> extends ReadonlyArray<DeepReadonly11491<T>> {}

type DeepReadonlyObject11491<T> = {
  readonly [P in keyof T]: DeepReadonly11491<T[P]>;
};

type UnionToIntersection11491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11491<T> = UnionToIntersection11491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11491<T extends unknown[], V> = [...T, V];

type TuplifyUnion11491<T, L = LastOf11491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11491<TuplifyUnion11491<Exclude<T, L>>, L>;

type DeepPartial11491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11491<T[P]> }
  : T;

type Paths11491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11491<K, Paths11491<T[K], Prev11491[D]>> : never }[keyof T]
  : never;

type Prev11491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11491 {
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

type ConfigPaths11491 = Paths11491<NestedConfig11491>;

interface HeavyProps11491 {
  config: DeepPartial11491<NestedConfig11491>;
  path?: ConfigPaths11491;
}

const HeavyComponent11491 = memo(function HeavyComponent11491({ config }: HeavyProps11491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11491.displayName = 'HeavyComponent11491';
export default HeavyComponent11491;

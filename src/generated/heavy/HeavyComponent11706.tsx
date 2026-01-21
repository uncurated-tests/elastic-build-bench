'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11706<T> = T extends (infer U)[]
  ? DeepReadonlyArray11706<U>
  : T extends object
  ? DeepReadonlyObject11706<T>
  : T;

interface DeepReadonlyArray11706<T> extends ReadonlyArray<DeepReadonly11706<T>> {}

type DeepReadonlyObject11706<T> = {
  readonly [P in keyof T]: DeepReadonly11706<T[P]>;
};

type UnionToIntersection11706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11706<T> = UnionToIntersection11706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11706<T extends unknown[], V> = [...T, V];

type TuplifyUnion11706<T, L = LastOf11706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11706<TuplifyUnion11706<Exclude<T, L>>, L>;

type DeepPartial11706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11706<T[P]> }
  : T;

type Paths11706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11706<K, Paths11706<T[K], Prev11706[D]>> : never }[keyof T]
  : never;

type Prev11706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11706 {
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

type ConfigPaths11706 = Paths11706<NestedConfig11706>;

interface HeavyProps11706 {
  config: DeepPartial11706<NestedConfig11706>;
  path?: ConfigPaths11706;
}

const HeavyComponent11706 = memo(function HeavyComponent11706({ config }: HeavyProps11706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11706.displayName = 'HeavyComponent11706';
export default HeavyComponent11706;

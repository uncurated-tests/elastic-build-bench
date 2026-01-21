'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly428<T> = T extends (infer U)[]
  ? DeepReadonlyArray428<U>
  : T extends object
  ? DeepReadonlyObject428<T>
  : T;

interface DeepReadonlyArray428<T> extends ReadonlyArray<DeepReadonly428<T>> {}

type DeepReadonlyObject428<T> = {
  readonly [P in keyof T]: DeepReadonly428<T[P]>;
};

type UnionToIntersection428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf428<T> = UnionToIntersection428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push428<T extends unknown[], V> = [...T, V];

type TuplifyUnion428<T, L = LastOf428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push428<TuplifyUnion428<Exclude<T, L>>, L>;

type DeepPartial428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial428<T[P]> }
  : T;

type Paths428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join428<K, Paths428<T[K], Prev428[D]>> : never }[keyof T]
  : never;

type Prev428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig428 {
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

type ConfigPaths428 = Paths428<NestedConfig428>;

interface HeavyProps428 {
  config: DeepPartial428<NestedConfig428>;
  path?: ConfigPaths428;
}

const HeavyComponent428 = memo(function HeavyComponent428({ config }: HeavyProps428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent428.displayName = 'HeavyComponent428';
export default HeavyComponent428;

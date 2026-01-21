'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly602<T> = T extends (infer U)[]
  ? DeepReadonlyArray602<U>
  : T extends object
  ? DeepReadonlyObject602<T>
  : T;

interface DeepReadonlyArray602<T> extends ReadonlyArray<DeepReadonly602<T>> {}

type DeepReadonlyObject602<T> = {
  readonly [P in keyof T]: DeepReadonly602<T[P]>;
};

type UnionToIntersection602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf602<T> = UnionToIntersection602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push602<T extends unknown[], V> = [...T, V];

type TuplifyUnion602<T, L = LastOf602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push602<TuplifyUnion602<Exclude<T, L>>, L>;

type DeepPartial602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial602<T[P]> }
  : T;

type Paths602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join602<K, Paths602<T[K], Prev602[D]>> : never }[keyof T]
  : never;

type Prev602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig602 {
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

type ConfigPaths602 = Paths602<NestedConfig602>;

interface HeavyProps602 {
  config: DeepPartial602<NestedConfig602>;
  path?: ConfigPaths602;
}

const HeavyComponent602 = memo(function HeavyComponent602({ config }: HeavyProps602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent602.displayName = 'HeavyComponent602';
export default HeavyComponent602;

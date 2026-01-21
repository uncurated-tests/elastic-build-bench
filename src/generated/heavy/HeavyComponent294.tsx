'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly294<T> = T extends (infer U)[]
  ? DeepReadonlyArray294<U>
  : T extends object
  ? DeepReadonlyObject294<T>
  : T;

interface DeepReadonlyArray294<T> extends ReadonlyArray<DeepReadonly294<T>> {}

type DeepReadonlyObject294<T> = {
  readonly [P in keyof T]: DeepReadonly294<T[P]>;
};

type UnionToIntersection294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf294<T> = UnionToIntersection294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push294<T extends unknown[], V> = [...T, V];

type TuplifyUnion294<T, L = LastOf294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push294<TuplifyUnion294<Exclude<T, L>>, L>;

type DeepPartial294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial294<T[P]> }
  : T;

type Paths294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join294<K, Paths294<T[K], Prev294[D]>> : never }[keyof T]
  : never;

type Prev294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig294 {
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

type ConfigPaths294 = Paths294<NestedConfig294>;

interface HeavyProps294 {
  config: DeepPartial294<NestedConfig294>;
  path?: ConfigPaths294;
}

const HeavyComponent294 = memo(function HeavyComponent294({ config }: HeavyProps294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent294.displayName = 'HeavyComponent294';
export default HeavyComponent294;
